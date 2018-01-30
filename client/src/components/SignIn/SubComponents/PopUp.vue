<template>
  <div class="Pop-Up" id='general-Pop-Up'>
    <div>
      <p>{{msg}}</p>
      <button>yes</button>
      <button v-on:click="closeModal">no</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  data () {
    return {
    }
  },
  props: ['msg',"closeModal","functionCall"],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width: 20%;
  height: 25%;
  background-color: white;
  margin: auto;
}
</style>
