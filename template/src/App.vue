<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>

/* flex布局兼容性写法
flex：定义布局为盒模型
flex-v：盒模型垂直布局
flex-l：盒模型水平布局
flex-1：子元素占据剩余的空间
flex-align-center：子元素垂直居中
flex-pack-center：子元素水平居中
flex-pack-justify：子元素两端对齐 
border-box：元素padding不影响
flex-text：按钮文本居中
*/

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.flex-v {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-l {
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.flex-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.flex-align-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-pack-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.flex-pack-justify {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.border-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

.flex-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 清除浮动 */
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

.clearfix {
  display: inline-table;
}

/* 解决动画闪烁，开启硬件加速，优化CSS动画性能 */
.css3fix {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  animation-fill-mode: forwards;
}

/* 框架布局 */
.fl {
  float: left;
}

.fr {
  float: right;
}

.ovH {
  overflow: hidden;
}

.poR {
  position: relative;
}

/* 文本对齐 */
.tL {
  text-align: left;
}

.tR {
  text-align: right;
}

/* 间距 */
.mt10 {
  margin-top: 10px;
}

.mr10 {
  margin-right: 10px;
}

.mb10 {
  margin-bottom: 10px;
}

.ml10 {
  margin-left: 10px;
}

.mt20 {
  margin-top: 20px;
}

.mr20 {
  margin-right: 20px;
}

.mb20 {
  margin-bottom: 20px;
}

.ml20 {
  margin-left: 20px;
}

.mt30 {
  margin-top: 30px;
}

.mr30 {
  margin-right: 30px;
}

.mb30 {
  margin-bottom: 30px;
}

.ml30 {
  margin-left: 30px;
}

.mt40 {
  margin-top: 40px;
}

.mr40 {
  margin-right: 40px;
}

.mb40 {
  margin-bottom: 40px;
}

.ml40 {
  margin-left: 40px;
}

/* 清楚小程序按钮样式 */
button::after {
  border: none;
}

input {
  outline: none;
  border: none;
  list-style: none;
}

button {
  margin: 0;
  padding: 0;
  background: none;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
