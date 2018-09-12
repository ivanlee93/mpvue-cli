import Vue from 'vue'
const state = {
  count: 0
}

const mutations = {
  INCREMENT: (state) => {
    const obj = state
    obj.count += 1
  },
  DECREMENT: (state) => {
    const obj = state
    obj.count -= 1
  }
}

const actions = {
  increment ({
    commit
  }) {
    commit('INCREMENT')
  },
  decrement ({
    commit
  }) {
    commit('DECREMENT')
  },
  getProvince ({
    commit
  }, params = {}) {
    return Vue.iBox.http('globalUrl.getProvince', params)({
      method: 'get'
    }).then(res => {
      console.log('vuex中接口返回的提示：' + res.data.provinceShort)
      return res
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
