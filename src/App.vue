<template>
  <TopBand/>
  <div id="nav" style="display:none">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <ContentWrapper/>
  <Footer/>
</template>
<script>
import TopBand from '@/components/TopBand.vue'
import Footer from '@/components/Footer.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
export default {
  components: {
    TopBand,
    Footer,
    ContentWrapper
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
