<script lang="ts">
    export default { 
        props: {
            datasource : {
                required : true , 
                type : Object , 
            }
        }
    }
</script>

<template>
        <div class="menu main">
            <div class="flex-column menu--login">
                <i>icon</i> <p>Fazer login</p><span>X</span>
            </div>
            <div class="flex-column menu--information"> 
                <i>icon</i> <p>Fazer login</p>
            </div>
            <div class="flex-column menu--main-menu">
                <i>voltar</i> <p>voltar para o menu principal</p><span>></span>
            </div>
            <div class="flex-column menu--return"> sdsd </div>
            <div class="flex-column menu--class"> 
                <i>icon</i> <p>Categoria</p><span>X</span>    
            </div>
            
        </div>

</template>
<style scoped lang="scss"> 
@import "./style.scss";
</style>