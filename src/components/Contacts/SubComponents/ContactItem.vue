<template>
  <div class="Contact-Item">
    <div class='userDetails'>
      <div class="receiptentIcon"><img/></div>
      <div class='userName'>{{userName}}</div>
    </div>
    <div class='receipt'>...</div>
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
.userDetails{
  display: flex;
  /* display: inline-block; */
}
.receiptentIcon{
  border-radius: 50%;
  border: black solid 0.2em;
  background-color: rgba(0,0,0,0.1);/*grey; */
  flex-grow: 1;
  width: 5.2em;
  margin: 0em 1em;
}
.userName{
  align-self: center;
  padding: 1em;
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
}
</style>
