<template>
  <div class="Contact-Item">
    <div class='userDetails'>
      <div class="receiptentIcon"><img/></div>
      <div v-for="(name,index) of names" class='userName'>
        {{name}}
        <span v-if="index<names.length-1">,</span>
      </div>
    </div>
    <div class='receipt'>
      <div v-for="receipt of ReadReceipt" class="receiptIcon" v-if="receipt.readLine==1" ><img/></div>
      <!-- <div class="receiptIcon"><img/></div> -->
    </div>
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
  props: ['names','ReadReceipt']
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
  display: flex;
  align-self:flex-end;
  text-align: right;
  flex-direction: row;
}
.receiptIcon{
  border-radius: 50%;
  border: black solid 0.2em;
  background-color: rgba(0,0,0,0.1);/*grey; */
  flex-grow: 0.1;
  margin: 0.2em;
  width: 1em;
  height: 1em;
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
