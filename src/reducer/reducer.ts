import { IProduct } from "./context";

export const cartReducer=(data:IProduct[],{type,currData}:{type:string;currData:IProduct})=>{
   
  switch (type) {
    case "addItem":
        return [...data,currData]
    case "updateQuantity":
        return data.map((it:IProduct) => it.id === currData.id ? currData:it);
    case "removeItem":
        return data.filter((t:{id:number}) => t.id !==  currData.id);
    default:
      throw Error('Unknown action: ' + type);
  }
}  
