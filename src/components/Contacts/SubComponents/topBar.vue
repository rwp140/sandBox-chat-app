<template>
  <div class="top-Bar">
    <h1>contacts</h1>
    profile >
  </div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  display: inline-block;
  height: inherit;
  margin-top: 0px;
  margin-bottom: 0px;
}
.top-Bar{
  border: black 1px solid;
  position: fixed;
  width: 100%;
  height: 3em;
  /* background-color: purple; */
}
</style>
