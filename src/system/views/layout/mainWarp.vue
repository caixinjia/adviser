<template>
    <div class="layout">
        <Layout>
            <Header>
              <div class="layout-logo"></div>
              <div class="user-info">
                <div class="login-out" @click="loginOut">
                  退出登录
                </div>
              </div>
            </Header>
            <Layout :style="{minHeight: '100vh'}">
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                  <Menu active-name="zixun" theme="dark" width="auto" :class="menuitemClasses">
                    <router-link :to="item.link" v-for="item in menuData" :key="item.name">
                      <MenuItem :name="item.name">
                          <Icon :type="item.icon"></Icon>
                          <span>{{item.text}}</span>
                      </MenuItem>
                    </router-link>
                  </Menu>
                </Sider>
                <Layout >
                    <Content>
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isCollapsed: false,
            menuData:[
              {
                link:'/admin/advisoryList',
                name:'zixun',
                icon:'chatboxes',
                text:'咨询管理'
              },
              {
                link:'/admin/404',
                name:'yuyue',
                icon:'clock',
                text:'预约管理'
              },
              {
                link:'/admin/404',
                name:'zhuanjia',
                icon:'person',
                text:'专家信息'
              },
              {
                link:'/admin/schoolList',
                name:'yuanxiao',
                icon:'university',
                text:'院校专业'
              },
              // {
              //   link:'/admin/404',
              //   name:'shoukuan',
              //   icon:'cash',
              //   text:'收款记录'
              // },
              // {
              //   link:'/admin/404',
              //   name:'wenzhang',
              //   icon:'edit',
              //   text:'文章编辑'
              // },
            ],
            userInfo:''
        };
    },
    mounted(){
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },
    methods:{
      loginOut(){
        localStorage.removeItem('userId');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userRole');
        this.$router.push('/login')
      }
    },
    computed: {
        menuitemClasses: function () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    }
}
</script>
<style lang="less">
@import url('../../style/index.less');
@import url('../../style/components.less');
</style>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.ivu-layout-header {
    height: 80px;
    background: #242536;
  }
.layout-logo{
  width: 200px;
  height: 80px;
  background: url('../../assets/images/后台.png') no-repeat center;
  background-size: 180px;
  background-color: #151524;
  float: left;
  position: relative;
  top: 0;
  left: -50px;
}

.ivu-layout-header .user-info{
  float: right;
  position: relative;
  height: 30px;
  top: 25px;
  right: 0;
  font-size: 18px;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
}
.ivu-layout-header .user-info:hover{
  opacity: 0.5;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-con{
        height: 100%;
        width: 100%;
    }
.menu-item span{
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
    margin-left: 16px;
    /* font-size: 20px; */
}
.menu-item i{

    vertical-align: middle;
    /* font-size: 28px; */
    margin-right: 0;
}
.collapsed-menu span{
    display: none;
}
.collapsed-menu i{
    font-size: 28px;
}
.ivu-menu-vertical .ivu-menu-item{
  padding: 24px;
}

</style>
