<template>
  <div class="table-list-header">
    <Button class="btn" v-if="deleteText" @click="deleteFunction">{{deleteText}}</Button>
    <Button class="btn" v-if="addText"  @click="addFunciton">{{addText}}</Button>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props:{
    deleteText:'',
    deleteFunction:'',
    addText:'',
    addFunciton:''
  }
}
</script>
