<template>
  <div class="TopBar">
    <span><</span> <h2>Contacts</h2> <span>{{recipient}}</span>

  </div>
</template>

<script>
export default {
  name: 'ChatTopBar',
  data () {
    return {
    }
  }, props: ['recipient']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span, h1{
  display: inline-block;
}
div{
  background-color: lightblue;
  max-width:50%;
  text-align: left;
  padding: 1%;
}
</style>
