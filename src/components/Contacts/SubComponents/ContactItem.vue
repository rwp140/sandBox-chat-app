<template>
  <div class="Contact-Item">
    {{userName}}
  </div>
</template>

<script>
export default {
  name: 'ContatcItem',
  data () {
    return {
      msg: ''
    }
  },
  props: ['userName','ReadReceipt']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Contact-Item{
  border: black 1px;
}
</style>
