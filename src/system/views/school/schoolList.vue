<template>
<div>
  <listHeader deleteText='删除所选' :deleteFunction='search' addText='新增院校' :addFunciton='search'></listHeader>
  <div class="table-list">
    <Table ref="selection" :columns="columns" :data="data"></Table>
    <Page :total="total" show-elevator @on-change="changePage" :page-size="20"></Page>
  </div>

</div>
</template>
<script>
import listHeader from '../../components/listHeader.vue'
export default {
  data() {
    return {
      columns: [{
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '物理院校',
          key: 'SCHOOL_NAME'
        },
        {
          title: '招生院校',
          key: 'RECRUIT_NAME'
        },
        {
          title: '院校编码',
          key: 'SCHOOL_CODE'
        },
        {
          title: '办学层次',
          key: 'SCHOOL_GRADE'
        },
        {
          title: '办学性质',
          key: 'SCHOOL_NATURE'
        },
        {
          title: '所在省市',
          key: 'address',
          render: (h, params) => {
            return h('div', params.row.SCHOOL_PROVINCE_TEXT + ',' + params.row.SCHOOL_CITY_TEXT);
          }

        },
        {
          title: '专业个数',
          key: 'SUBJECT_COUNT'
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.toSubjesc(params.row.RECRUIT_ID,params.row.RECRUIT_NAME)
                  }
                }
              }, '查看专业')
            ]);
          }
        }
      ],
      data: [],
      total: 0
    }
  },
  components: {
    listHeader
  },
  created() {
    this.search()
  },
  methods: {
    search(page = 1) {
      // 获取总页码数
      this.$api.get('/loadSchoolList', {}, (res) => {
        this.total = res.length;
      })
      this.$api.get('/loadSchoolList', {
        beginRow: (page - 1) * 20 + 1,
        endRow: page * 20
      }, (res) => {
        this.data = res
      })
    },
    changePage(current) {
      this.search(current)
    },
    toSubjesc(id,name){
      this.$router.push({
        path:'/admin/subjectList',
        query:{
          recruitId:id,
          recruitName:name,
        }
      })
    }
  }
}
</script>
