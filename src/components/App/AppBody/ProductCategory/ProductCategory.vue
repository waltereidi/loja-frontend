<script lang="ts">
    import ProductComponent from './ProductComponent/ProductComponent.vue';

    export default {
        components:{
            ProductComponent,
        }
    }
</script>
<template>
    <div class="product-container">
        <div class="title"></div>
        <ProductComponent></ProductComponent>

    </div>


</template>
<style scoped lang='scss'>
    @import './style.scss';
</style>