import React, { useReducer, } from 'react'
import { Context, DispatchContext } from '../../reducer/context'
import { cartReducer } from '../../reducer/reducer';
import Cart from './Cart';
import Products from '../../json/products.json'

const CartApp:React.FC = () => {
     const [state, dispatch] = useReducer(cartReducer,Products);
  return (
    <Context.Provider value={state} >
        <DispatchContext.Provider value={dispatch} >
           <Cart />
        </DispatchContext.Provider>
    </Context.Provider>
  )
}

export default CartApp