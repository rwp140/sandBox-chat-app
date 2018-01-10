<template>
  <div class="Pop-Up" id="new-user-form">
    <div>
      New Parrent Account
      <h3>Email</h3>
      <input type='text'>
      <h3>Password</h3>
      <input type='password'>
      <h3>Confirm password</h3>
      <input type='password'>
      <button v-on:click="functionCall">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewUserForm',
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
  /* height: 25%; */
  padding: 1%;
  background-color: white;
  margin: auto;
}
</style>
