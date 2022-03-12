<template>
  <div class="contentWrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ContentWrapper',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentWrapper{
  min-height: 500px;
  background-color: #EFEDEA;
}
</style>
