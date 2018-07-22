<template>
  <div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        mavinList:[],
        data:[]
      }
    },
    created(){
      this.search()
    },
    methods:{
      search() {
        this.$api.get('/loadOrderList', {}, (res) => {

        })
      },
    }
  }
</script>
