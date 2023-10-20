
<script lang="ts">
import AppFooter from "@/components/App/AppFooter/AppFooter.vue";
import AppHeader from "./components/App/AppHeader/Menu/AppHeader.vue";

//faze de testes 


  export default { 
    data(){
      return {
        categoriasHeaderDataSource : require("/tests/json/categoriasHeader.json") ,
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
  <router-view/>
<AppFooter></AppFooter>
</template>

<style lang="scss">

</style>
