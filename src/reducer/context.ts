import { createContext } from "react";
export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity:number;
    rating: {
      rate: number;
      count: number;
    };
  }
  
export const Context=createContext([] as IProduct[]);

export const DispatchContext=createContext(null);