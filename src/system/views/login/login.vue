<template>
<div class="login-wrap">
  <div class="ms-title">高招360后台管理系统</div>
  <div class="ms-login">
    <div class="ms-div" style="margin-top:60px" :class="{on:phoneFocus}">
      <div class="ms-label">账号</div>
      <div class="ms-input">
        <input @focus="inputFocus(1)" @blur="inputBlur(1)" autocomplete="new-password" v-model="myData.phone" />
      </div>
    </div>
    <div class="ms-div" :class="{on:passwordFocus}">
      <div class="ms-label">密码</div>
      <div class="ms-input">
        <input type="password" @focus="inputFocus(2)" @blur="inputBlur(2)" autocomplete="new-password" v-if="hidePwd" v-model="myData.password" />
        <input @focus="inputFocus(2)" @blur="inputBlur(2)" autocomplete="new-password" v-else v-model="myData.password" />
      </div>
      <div class="hide-pwd" @click="toHidePwd"></div>
    </div>
    <div class="remember" :class="{on:remember}" @click="rememberPwd">
      <div>记住账号</div>
    </div>
    <div class="login-btn" @click="login">登录</div>
  </div>
</div>
</template>
<script>
import md5 from 'js-md5';
export default {
  data() {
    return {
      phoneFocus: false,
      passwordFocus: false,
      hidePwd: true,
      remember: false,
      myData: {
        phone: '',
        password: ''
      }
    }
  },
  mounted(){
    if(localStorage.getItem('rememberPhone')){
      this.remember = true;
      this.myData.phone = localStorage.getItem('rememberPhone');
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
    },
    toHidePwd() {
      this.hidePwd = !this.hidePwd;
    },
    rememberPwd() {
      this.remember = !this.remember;
    },
    login(){
      return new Promise((resolve,reject)=>{
        let data = {
          mobileNum:this.myData.phone,
          passwd: md5.hex(this.myData.password)
        }
        this.$api.post('/login',data,(res)=>{
          if(res.RESULTS=='SUCCESS'){
            if(res.ROLE=='role_manager'){
              localStorage.setItem('userRole',res.ROLE);
              localStorage.setItem('userId',res.USER_ID)
              this.getUserInfo(res.USER_ID);
              this.sureRemeber();
              resolve(res)
            }else{
              this.$Message.error('权限不够');
            }
          }else{
            this.$Message.error(res.MSG);
            reject(res)
          }
        })
      })
    },
    getUserInfo(userId){
      this.$api.get('/showUserInfo',{
        userId:userId
      },(res)=>{
        localStorage.setItem('userInfo',JSON.stringify(res));
        this.$router.push('/admin')
      })
    },
    sureRemeber(){
      if(this.remember){
        localStorage.setItem('rememberPhone',this.myData.phone);
      }else{
        localStorage.removeItem('rememberPhone');
      }
    }
  }
}
</script>
<style lang="less" scope>
@import url('../../style/login.less');
</style>
