
<script lang="ts">
import AppFooter from "@/components/App/AppFooter/AppFooter.vue";
import AppHeader from "./components/App/AppHeader/AppHeader.vue";
import AppFooterBottom from "@/components/App/AppFooter/AppFooterBottom.vue";
//faze de testes 
import AppBody from "@/components/App/AppBody/AppBody.vue";

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
      AppFooterBottom,
      
    }
  }
</script>
<template>
  <div class="app-container">
    <AppHeader :datasource="categoryHeaderDataSource"> </AppHeader>
    <router-view/>
    <AppFooter></AppFooter>
    
  </div>
<AppFooterBottom/>
</template>

<style lang="scss">
 @import './index.scss';
</style>
