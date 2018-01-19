<template>
  <div class="wrapper">
    <div v-if="direction=='left'" class="spacer"></div>
    <div class="Message-Item">
      <div  v-if="direction=='right'"class="message-Sender">
        <img/>
      </div>
      <p class ="message-Content">
        {{content}}
      </p>
      <img v-if="direction=='left'" class="message-Sender" />
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
    background-color: lightblue;
    text-align: left;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 1em;
    padding: 1%;
  }
  .message-Sender{
    border-radius: 50%;
    border: black solid 0.2em;
    background-color: rgba(0,0,0,0.1);
    flex-shrink:0;
    width: 2em;
    height: 2em;
  }
  .message-Content{
  }
</style>
