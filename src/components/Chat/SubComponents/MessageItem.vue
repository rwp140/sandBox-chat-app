<template>
  <div class="wrapper">
    <div v-if="direction=='left'" class="spacer"></div>
    <div class="Message-Item">
      <div  v-if="direction=='right'"class="message-Sender">
        <img/>
      </div>
      <div class ="message-Content">
        {{content}}
      </div>
      <div v-if="direction=='left'" class="message-Sender">
        <img/>
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
    /* background-color: lightblue;
    text-align: left;
    padding: 1%; */
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
    word-wrap:break-word;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 1em;
    padding: 1%;
  }
  .message-Sender{
    border-radius: 50%;
    border: black solid 0.2em;
    background-color: rgba(0,0,0,0.1);/*grey; */
    /* flex-grow: 0.1; */
    width: 2em;
    height: 2em;
    margin: 0em 1em;
  }
</style>
