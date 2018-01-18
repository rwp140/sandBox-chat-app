<template>
  <div class="TopBar">
    <div id="back" v-on:click="back">
      <span ><-back</span>
    </div>
    <div v-for="recipient in recipients">
       <span>{{recipient}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatTopBar',
  data () {
    return {
    }
  },
  props: ['recipients'],
  methods:{
    back:function (){
      console.log("hey");
      this.$router.push({ path: '/contacts' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span, h1{
  display: inline-block;
  height: inherit;
}
.TopBar{
  background-color: pearl;
  border-bottom: black solid 1px;
  height: 5%;
  max-width:100%;
  text-align: left;
  padding: 1%;
  display: flex;
  justify-content: space-between;
}
#back :hover{
  background-color: rgb(1,1,1);
  background-color: rgba(0,0,0,0.2);
}
</style>
