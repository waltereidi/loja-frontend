
<script lang="ts">
import AppFooter from "@/components/App/AppFooter/AppFooter.vue";
import AppHeader from "./components/App/AppHeader/AppHeader.vue";

//faze de testes 


  export default { 
    data(){
      return {
        categoryHeaderDataSource : require("/tests/json/categoryHeader.json") ,
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
  <AppHeader :datasource="categoryHeaderDataSource"> </AppHeader>
  <router-view/>
<AppFooter></AppFooter>
</template>

<style lang="scss">
 @import './index.scss';
</style>
