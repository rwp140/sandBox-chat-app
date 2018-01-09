<template>
  <div class="Pop-Up">
    <h3>Reset token</h3>
    <input type='text'>
    <h3>New Password</h3>
    <input type='password'>
    <h3>Confirm new password</h3>
    <input type='password'>
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
.Pop-Up{

}
</style>
