
<script lang="ts">
import AppFooter from "@/components/App/AppFooter/AppFooter.vue";
  export default { 
    methods : {
      
    },
    components : { 
      AppFooter , 
    }
  }
</script>
<template>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
<AppFooter></AppFooter>
</template>

<style lang="scss">

</style>
