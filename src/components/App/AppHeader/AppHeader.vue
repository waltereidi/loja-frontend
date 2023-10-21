<script lang="ts">
import CategoryHeader from './Category/CategoryHeader.vue';

const props = {
    datasource :{
        required : true , 
        type: Object 
    }
}
const clicked = () =>{console.log('sdsd')};
const methods = {
    clicked
}
export default{
    props  , 
    methods, 
    components:{
        CategoryHeader,
    }
}

</script>

<template>
    <CategoryHeader :datasource="datasource" v-if="this.$store.getNavMenu"></CategoryHeader>
    

</template>
<style lang="scss">
    @import "./style.scss";
</style>