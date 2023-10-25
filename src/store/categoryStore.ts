import { ref , computed } from "vue";
import { defineStore } from 'pinia';
import { CategoryStoreController } from "@/store/Controllers/categoryStoreController";

export const categoryStore = defineStore('category' , {
    
    state: () => {
        return {
            categoryArray : {},
            categoryStoreController : new CategoryStoreController(),
        }
    },
    getters:{
        getCategoryBar(state)
        {
            return state.categoryArray;
        }
    },
    actions:{

        setCategoryBar(datasource:Array<any>) 
        {
            this.categoryArray=this.categoryStoreController.getCategoryBar(datasource);
        }
        
    }



});