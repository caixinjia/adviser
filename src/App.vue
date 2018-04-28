<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    this.$api.get('/loadMavinList',{},(res)=>{
      console.log(res)
    })
  }
}
</script>
<style lang="less">
  @import url('./system/style/common.less');
</style>
