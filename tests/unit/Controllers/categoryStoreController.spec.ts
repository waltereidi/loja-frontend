import { expect, test } from 'vitest';
import { CategoryStoreController } from "/src/store/Controllers/categoryStoreController";
import datasource from '../../json/categoryHeader.json';
const categoryStoreController =new CategoryStoreController();

test('getCategoryBar',()=>{
    let datasourceTest :Array<object> = datasource; 
    datasourceTest[0].order = 11; 
    const retorno :any = categoryStoreController.getCategoryBar(datasourceTest); 
    
    expect(retorno[0].order).toBe(2);
})