<template>
  <div>
    <div class="table-list-header">
      <div class="btn">删除所选</div>
      <div class="btn">新增院校</div>
    </div>
    <div class="table-list">
      <Table ref="selection" :columns="columns" :data="data"></Table>
      <Page :total="20" show-elevator></Page>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return {
      columns: [
          {
              type: 'selection',
              width: 60,
              align: 'center'
          },
          {
              title: '物理院校',
              key: 'RECRUIT_NAME'
          },
          {
              title: '院校编码',
              key: 'SCHOOL_CODE'
          },
          {
              title: '招生批次',
              key: 'address'
          },
          {
              title: '录取批次',
              key: 'address'
          },
          {
              title: '办学层次',
              key: 'address'
          },
          {
              title: '办学性质',
              key: 'address'
          },
          {
              title: '所在省市',
              key: 'address',
              render: (h, params) => {
                return h('div',params.row.SCHOOL_PROVINCE_TEXT + ',' +params.row.SCHOOL_CITY_TEXT);
              }

          },
          {
              title: '专业个数',
              key: 'address'
          }
      ],
      data: []
    }
  },
  created(){
    this.search()
  },
  methods:{
    search(){
      this.$api.get('/loadSchoolList',{
        endRow: 20
      },(res)=>{
        this.data = res
      })
    }
  }
}
</script>
