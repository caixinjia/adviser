<template>
<div class="login-wrap">
  <div class="ms-login">
    <div class="ms-div" style="margin-top:60px" :class="{on:phoneFocus}">
      <div class="ms-label">账号</div>
      <div class="ms-input">
        <input @focus="inputFocus(1)" @blur="inputBlur(1)" autocomplete="new-password" />
      </div>
    </div>
    <div class="ms-div" :class="{on:passwordFocus}">
      <div class="ms-label">密码</div>
      <div class="ms-input">
        <input type="password" @focus="inputFocus(2)" @blur="inputBlur(2)" autocomplete="new-password" />
      </div>
    </div>
    <div class="login-btn">登录</div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      phoneFocus: false,
      passwordFocus: false
    }
  },
  methods: {
    inputFocus(id) {
      if (id == 1) {
        this.phoneFocus = true;
      } else {
        this.passwordFocus = true;
      }
    },
    inputBlur(id) {
      if (id == 1) {
        this.phoneFocus = false;
      } else {
        this.passwordFocus = false;
      }
    }
  }
}
</script>
<style lang="less" scope>
@import url('../../style/login.less');
</style>
