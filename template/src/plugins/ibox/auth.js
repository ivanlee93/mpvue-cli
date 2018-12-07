const grantMap = {
  chooseAddress: {
    scope: 'address',
    name: '通讯地址'
  },
  saveImageToPhotosAlbum: {
    scope: 'writePhotosAlbum',
    name: '保存到相册'
  },
  getLocation: {
    scope: 'userLocation',
    name: '地理位置'
  }
}

function getSetting (scope, opts = {}) {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success ({
        authSetting
      }) {
        resolve(authSetting[`scope.${scope}`])
        opts.success && opts.success(authSetting[`scope.${scope}`])
      },
      fail (err) {
        reject(err)
        opts.fail && opts.fail(err)
      }
    })
  })
}

function openSetting (scope, opts = {}) {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success ({
        authSetting
      }) {
        if (scope) {
          resolve(authSetting[`scope.${scope}`])
          opts.success && opts.success(authSetting[`scope.${scope}`])
        } else {
          resolve(authSetting)
          opts.success && opts.successopts.success(authSetting)
        }
      },
      fail (err) {
        reject(err)
        opts.fail && opts.fail(err)
      }
    })
  })
}

function confirm ({
  content = '',
  title = '',
  options = [{}, {}]
}) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      cancelText: options[0].label || '取消',
      confirmText: options[1].label || '确定',
      confirmColor: '#21c0ae',
      success: function (res) {
        if (res.confirm) {
          resolve(res)
          if (options[1].callback) {
            options[1].callback()
          }
        } else if (res.cancel) {
          reject(res)
          if (options[0].callback) {
            options[0].callback()
          }
        }
      }
    })
  })
}
export function auth (apiName, params, content = `没有设置提示文案`) {
  const grant = grantMap[apiName]
  if (!grant) {
    throw Error(
      `未配置[${apiName}]的api授权映射，请与bridge.js中的grantMap添加映射关系！`
    )
  }
  getSetting(grant.scope, {
    success: (isGrant) => {
      if (typeof isGrant === 'boolean' && !isGrant) {
        // 用户若已经不允许授权过了，则引导用户重新授权
        confirm({
          content: content,
          title: '温馨提示',
          options: [{}, {
            callback: _ => {
              openSetting()
            }
          }]
        })
      } else {
        // 若用户未授权过，或者已经授权允许了，则直接调 api
        wx[apiName](params)
      }
    }
  })
}

export default {
  auth
}
