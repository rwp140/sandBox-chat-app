<template>
  <div class="Pop-Up">
    <div>
      <h3>Reset token</h3>
      <input type='text'>
      <h3>New Password</h3>
      <input type='password'>
      <h3>Confirm new password</h3>
      <input type='password'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPasswordForm',
  data () {
    return {
      msg: 'Pop-Up'
    }
  }
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
