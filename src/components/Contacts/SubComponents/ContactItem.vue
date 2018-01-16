<template>
  <div class="Contact-Item">
    <div class='userName'>{{userName}}</div> <div class='receipt'>...</div>
  </div>
</template>

<script>
export default {
  name: 'ContatcItem',
  data () {
    return {
      msg: ''
    }
  },
  props: ['userName','ReadReceipt']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userName{
  display: inline-block;
}
.receipt{
  display: inline-block;
  text-align: right;
}
.Contact-Item{
  border: black 1px solid;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 6em;
  /* background-color: blue; */
}
</style>
