<script lang="ts">
import CategoriasHeader from '../Categorias/CategoriasHeader.vue';

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
        CategoriasHeader,
    }
}

</script>

<template>
    <CategoriasHeader :datasource="datasource" v-if="this.$store.getNavMenu"></CategoriasHeader>
    

</template>