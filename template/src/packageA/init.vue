<template>
  <div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

  data () {
    // 页面状态数据
    return {
    }
  },

  components: {
    // 引入的组件名
  },

  computed: {
    // 映射Store中的数据
    ...mapState('', [''])
  },

  methods: {
    // 映射Store中的异步函数/请求
    ...mapActions('', ['']),
    // 映射Store中的同步函数/请求
    ...mapMutations('', [''])
  },

  async onLoad () { },

  async onShow () { }
}
</script>

<style lang="stylus">
</style>


