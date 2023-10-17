<script lang="ts">
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
    methods
}

</script>

<template>
    <h1>sdsd</h1>
    {{ datasource }}
    
</template>