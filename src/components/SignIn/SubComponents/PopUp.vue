<template>
  <div class="Pop-Up">
    {{msg}}
    <button>yes</button>
    <button>no</button>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
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
