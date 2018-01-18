<template>
  <div class="wrapper">
    <div v-if="direction=='left'" class="spacer"></div>
    <div class="Message-Item">
      <div class="message-Sender">
      </div>
      <div class ="message-Content">
        {{content}}
      </div>
    </div>
    <div v-if="direction=='right'" class="spacer"></div>
    <br>
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
    text-align: left;
    padding: 1%;
  }
  .wrapper{
    background-color: inherit;
    display: flex;
    width: 100%;
  }
  .spacer{
    background-color: inherit;
    width:50%;
    height: 10px;
    display: inline;
  }
  .Message-Item{
    width: 50%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0);
  }
</style>
