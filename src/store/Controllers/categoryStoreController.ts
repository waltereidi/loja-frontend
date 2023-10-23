export class CategoryStoreController{

    
getCategoryBar(datasource:Array<any>) : Array<object>
{
    return datasource.filter( (x)=>  x.order<=10);
}
}