
<script lang="ts">
import AppFooter from "@/components/App/AppFooter/AppFooter.vue";
import AppHeader from "./components/App/AppHeader/Menu/AppHeader.vue";

//faze de testes 


  export default { 
    data(){
      return {
        categoriasHeaderDataSource : require("../public/json/categoriasHeader.json") ,
      }
    },
    methods : {
    },
    components : { 
      AppFooter , 
      AppHeader ,
    }
  }
</script>
<template>
  <AppHeader :datasource="categoriasHeaderDataSource"> </AppHeader>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
<AppFooter></AppFooter>
</template>

<style lang="scss">

</style>
