<template>
<div class="advisory">
  <div class="advisory-header"></div>
  <div class="advisory-list">
    <div class="advisory-item" v-for="(item,index) in data" :key="index">
      <div class="advisory-time">
        {{questionTime(item.QUESTION_TIME)}}
      </div>
      <div class="advisory-detail" :class="{'no-answer':item.IS_ANSWER==0}">
        <div class="advisory-question">
          {{item.QA_QUESTION}}
        </div>
        <div class="advisory-answer" v-if="item.IS_ANSWER==1">
          {{item.QA_ANSWER}}
        </div>
        <div class="answer-btn" v-else>
          <div @click="handleRender(item.QA_ID)">
            立即回答
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      answer:'',
      questionId:''
    }
  },
  created() {
    this.search()
  },
  methods: {
    search(page = 1) {
      // 获取总页码数
      // this.$api.get('/loadMavinQAList', {}, (res) => {
      //   this.total = res.length;
      // })
      this.$api.get('/loadMavinQAList', {}, (res) => {
        this.data = res
      })
    },
    questionTime(time) {
      if (time != '') {
        let y = time.substr(0, 4);
        let m = time.substr(4, 2);
        let d = time.substr(6, 2);
        let h = time.substr(8, 2);
        let min = time.substr(10, 2);
        let s = time.substr(12, 2);

        return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
      } else {
        return ''
      }
    },
    handleRender(id) {
      this.questionId = id;
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.answer,
              autofocus: true,
              placeholder: '回答问题',
              type:"textarea"
            },
            on: {
              input: (val) => {
                this.answer = val;
              }
            }
          })
        },
        okText:'确认回答',
        onCancel:(res) => {
          this.answer = ''
        },
        onOk:(res)=>{
          this.$api.get('/saveMavinQA', {
            qaId:this.questionId,
            qaAnswer:this.answer,
            qaMavin:'2',
            qaMavinName:'陈文',
          }, (res) => {
            this.$Message.success('回答成功');
            this.search();
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url('../../style/advisory.less');
</style>
