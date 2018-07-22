<template>
<div class="mavin">
  <div class="table-list">
    <Table ref="selection" :columns="columns" :data="data"></Table>
    <Page show-elevator></Page>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      total: 0,
      orderType: 1,
      columns: [
        {
          title: '专家头像',
          key: 'MAVIN_PHOTO_FILENAME',
          render: (h, params) => {
            return h('img',{attrs:{'src':'https://fjgz360.cn/chuxian/'+params.row.MAVIN_PHOTO_FILENAME}});
          }
        },
        {
          title: '专家ID',
          key: 'MAVIN_ID'
        },
        {
          title: '专家姓名',
          key: 'MAVIN_NAME'
        },
        {
          title: '专家头衔',
          key: 'MAVIN_TITLE'
        },
        {
          title: '专家类别text值',
          key: 'MAVIN_CATEGORY_TEXT'
        },
        {
          title: '专家简介',
          key: 'MAVIN_EXPLAIN'
        },
      ],
    }
  },
  created() {
    this.search()
  },
  methods: {
    search(page = 1) {
      this.$api.get('/loadMavinList', {
      }, (res) => {
        this.data = res
      })
    },
  }
}
</script>
<style lang="less" scoped>

</style>
