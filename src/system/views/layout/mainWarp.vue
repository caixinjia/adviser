<template>
    <div class="layout">
        <Layout>
            <Header>
              <div class="layout-logo"></div>
            </Header>
            <Layout :style="{minHeight: '100vh'}">
                <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                  <Menu active-name="yuyue" theme="dark" width="auto" :class="menuitemClasses">
                    <router-link :to="item.link" v-for="item in menuData">
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
                link:'',
                name:'yuyue',
                icon:'clock',
                text:'预约管理'
              },
              {
                link:'',
                name:'zixun',
                icon:'chatboxes',
                text:'咨询管理'
              },
              {
                link:'',
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
              {
                link:'',
                name:'shoukuan',
                icon:'cash',
                text:'收款记录'
              },
              {
                link:'',
                name:'wenzhang',
                icon:'edit',
                text:'文章编辑'
              },
            ]
        };
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
  }
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
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
    margin-left: 12px;
    font-size: 20px;
}
.menu-item i{

    vertical-align: middle;
    font-size: 28px;
    margin-right: 0;
}
.collapsed-menu span{
    display: none;
}
.ivu-menu-vertical .ivu-menu-item{
  padding: 24px;
}

</style>
