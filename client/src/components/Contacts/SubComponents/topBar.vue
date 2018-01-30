<template>
  <div class="top-Bar">
    <h1>contacts</h1>
    <span id="profile-Link" v-on:click="loadProfile">profile ></span>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    loadProfile:function() {
      this.$router.push({path:"/profile"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-Bar h1{
  display: inline-block;
  height: inherit;
  margin-top: 0px;
  margin-bottom: 0px;
  flex:auto;
  align-self:center;
}
.top-Bar{
  border: black 1px solid;
  position: fixed;
  width: 100%;
  height: 3em;
  display: flex;
  flex-direction:row;
}
#profile-Link{
  align-self:flex-end;
}
#profile-Link :hover{
  background-color: rgb(1,1,1);
  background-color: rgba(0,0,0,0.2);
}
</style>
