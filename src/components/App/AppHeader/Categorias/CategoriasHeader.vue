<script lang="ts">
import { ref } from "vue";

    export default { 
        props:{
            datasource : {
                type: Object , 
                required: true , 
            }
        },
        data() {
            return {
                categoryDataSource:{
                    type:Object
                } , 
                parentDataSource : {
                    type:Object,
                    default:null 
                }, 

            }
        },
        methods:{
            setCategory(parentDataSource:object  ,children:object ){
                this.categoryDataSource = children;
                this.parentDataSource = parentDataSource;
            },
            setMainMenu(){
                this.parentDataSource = null ; 
                this.categoryDataSource = this.datasource;
            },
            setPreviousMenu(){
                this.categoryDataSource = this.parentDataSource;
                this.parentDataSource=null ;
            }
        },
        beforeMount(){
            this.categoryDataSource = this.datasource;
        }
    }
</script>

<template>
    {{ categoryDataSource }}
        <div :class="'menu'+(parentDataSource?.category !== 'main' ? ' sub-category' : '' )+(parentDataSource===null?' main':'')">
            <div class="flex-column menu--login">
                <i>icon</i> <p>Fazer login</p><span>X</span>
            </div>
            <div class="flex-column menu--information"> 
                <i>icon</i> <p>Fazer login</p>
            </div>
            
            <div class="flex-column menu--main-menu">
                <i @click="setMainMenu" >voltar</i> <p @click="setMainMenu">voltar para o menu principal</p><span>></span>
            </div>

            <div class="flex-column menu--return" v-if="parentDataSource!==null">
                <i @click="setPreviousMenu" >voltar</i> <p @click="setPreviousMenu">{{ 'Voltar a '+parentDataSource.parent  }}</p>
            </div>
            
            <div class="flex-column menu--category" v-for="(category ,index ) in categoryDataSource" :key="index"> 
                <i @click="setCategory(category , category.children)" >icon</i> 
                <p @click="setCategory(category , category.children)"> {{ category.name }} </p> 
                <span> X </span>
            </div>


            
            
            
            
        </div>

</template>
<style scoped lang="scss"> 
@import "./style.scss";
</style>