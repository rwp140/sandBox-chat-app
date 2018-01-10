<template>
  <div class="Message-Item">
    <div>
      <!-- {{senderIcon}} -->
      {{content}}
      <!-- {{sender}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageItem',
  data () {
    return {
      msg: ''
    }
  },
  props:['sender','senderIcon','content','direction']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    background-color: lightblue;
    /* max-width:50%; */
    text-align: left;
    padding: 1%;
  }
</style>
