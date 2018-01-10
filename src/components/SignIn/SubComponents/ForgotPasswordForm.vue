<template>
  <div class="Pop-Up" id="forgot-pass-form">
    <div>
      send reset token to email
      <input type='email' placeholder="Email"/>
      <button v-on:click="functionCall">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordForm',
  data () {
    return {
      msg: 'Pop-Up'
    }
  },
  props: ["closeModal","functionCall"]
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
