<template>
<div class="payment">
  <div class="payment-header">
    <Button class="btn" @click="changeType()">全部</Button>
    <Button class="btn" @click="changeType(1)">购买会员</Button>
    <Button class="btn" @click="changeType(2)">专家咨询</Button>
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
      data: [],
      total: 0,
      orderType: 1,
      columns: [
        {
          title: '订单号',
          key: 'ORDER_NUM'
        },
        {
          title: '用户手机',
          key: 'MOBILE_NUMBER'
        },
        {
          title: '订单类型',
          key: 'ORDER_TYPE',
          render: (h, params) => {
            return h('div',params.row.ORDER_TYPE==1?'购买会员':'专家咨询');
          }
        },
        {
          title: '订单内容',
          key: 'ORDER_TRADE_NAME'
        },
        {
          title: '订单金额',
          key: 'ORDER_MONEY'
        },
        {
          title: '订单状态',
          key: 'ORDER_STATE',
          render: (h, params) => {
            return h('div',params.row.ORDER_STATE==1?'付款成功':'付款失败');
          }
        },
        {
          title: '订单生成时间',
          key: 'PAY_START_TIME'
        },
        {
          title: '付款成功时间',
          key: 'PAY_SUCCESS_TIME'
        },
      ],
    }
  },
  created() {
    this.search()
  },
  methods: {
    search(page = 1) {
      this.$api.get('/loadOrderList', {
        orderState: 1,
        orderType:this.orderType,
        beginRow: (page - 1) * 20 + 1,
        endRow: page * 20
      }, (res) => {
        this.total = Number(res[0].ORDER_COUNT);
        this.data = res
      })
    },
    changePage(current) {
      this.search(current)
    },
    changeType(orderType){
      this.orderType = orderType;
      this.search();
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/payment.less');
</style>
