<template>
<div class="subject">
  <div class="subject-header">
    {{recruitName}}
  </div>
  <div class="table-list">
    <Table ref="selection" :columns="columns" :data="data"></Table>
    <Page :total="total" show-elevator @on-change="changePage" :page-size="20"></Page>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      recruitId: '',
      recruitName: '',
      schoolData: '',
      data: [],
      total: 0,
      orderType: 1,
      columns: [{
          title: '专业名称',
          key: 'SUBJECT_NAME'
        },
        {
          title: '招生院校名称',
          key: 'RECRUIT_NAME'
        },
        {
          title: '文理分类',
          key: 'SUBJECT_TYPE_TEXT'
        },
        {
          title: '专业大类',
          key: 'SUBJECT_CLASS_TEXT'
        },
        {
          title: '招生批次',
          key: 'RECRUIT_BATCH_TEXT'
        },
        {
          title: '学科评级',
          key: 'SUBJECT_GRADE'
        },
      ],
    }
  },
  created() {

    this.recruitId = this.$route.query.recruitId;
    this.recruitName = this.$route.query.recruitName;
    this.search()
  },
  methods: {
    search(page = 1) {
      this.$api.get('/loadSubjectList', {
        recruitName: this.recruitName
      }, (res) => {
        this.total = res.length;
      })
      this.$api.get('/loadSubjectList', {
        recruitName: this.recruitName,
        beginRow: (page - 1) * 20 + 1,
        endRow: page * 20
      }, (res) => {
        this.data = res
      })
    },
    changePage(current) {
      this.search(current)
    },
  }
}
</script>
<style lang="less" scoped>
.subject-header {
    height: 60px;
    background: #fff;
    padding: 15px 40px;
    font-size: 16px;
    line-height: 30px;
    font-weight: bold;
    color: #666;
}
</style>
