<script>
import { ref } from 'vue';
import CategoryHeader from './Category/CategoryHeader.vue';
import LogoHeader from './Logo/LogoHeader.vue';
import SearchHeader from './Search/SearchHeader.vue';
import BuyHeader from './Buy/BuyHeader.vue';
import CategoryBar from './CategoryBar/CategoryBar.vue';
import { CategoryStoreController } from '/src/store/categoryStore.ts';

const props = {
    datasource :{
        required : true , 
        type: Object 
    }
}

export default{
    props, 
    data(){
        return {
            categoryStoreController : ref( CategoryStoreController ) ,
        }
    },
    methods:{
        openMenu(){
        this.$store.commit('openMenu');
        }, 
        
    }, 
    components:{
        CategoryHeader,
        SearchHeader, 
        BuyHeader, 
        LogoHeader,
        CategoryBar,
    },
 
}

</script>

<template>
    <CategoryHeader :datasource="datasource" v-if="this.$store.getters.getNavMenu"></CategoryHeader>
    <div class="header">
        <div class="header--menu" @click="openMenu">
            <img src="img/icons/AppHeader/menu.svg"/>
        </div>
        <div class="header--logo"><LogoHeader/></div>
        <div class="header--search"><SearchHeader/></div>
        <div class="header--buy"><BuyHeader/></div>
        <div class="header--category-bar">

            <CategoryBar :datasource="datasource"></CategoryBar>
        </div>

    </div>

</template>
<style lang="scss">
    @import "./style.scss";
</style>