<template>
  <div class="animated flipInX">
    <h1>My name is Roger</h1>
  </div>
</template>

<script>
export default {
  name: 'roger',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {display: inline-block; width: 500px;}
</style>
