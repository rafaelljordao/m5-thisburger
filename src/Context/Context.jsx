import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { cartReducer } from "./Reducers";
import ifsalada from '../assets/if-salada.png'
import backbacon from '../assets/back-bacon.png'
import elsetudo from '../assets/else-tudo.png'
import xbug from '../assets/x-bug.png'
import frontegg from '../assets/front-egg.png'


const Cart = createContext();

const Context = ({children}) => {

    const data = {
        products: [
            {
                id: '1',
                name: 'If-Salada',
                price: 15,
                image: ifsalada
            },
            {
                id: '2',
                name: 'Back-Bacon',
                price: 25,
                image: backbacon
            },
            {
                id: '3',
                name: 'Else-Tudo',
                price: 31,
                image: elsetudo
            },
            {
                id: '4',
                name: 'X-Bug',
                price: 27,
                image: xbug
            },
            {
                id: '5',
                name: 'Front-Egg',
                price: 22,
                image: frontegg
            }
           
        ]
    }



    const [state, dispatch] = useReducer(cartReducer, {
        data,
        cart: [],
    })

  return (
    <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState= () => {
    return useContext(Cart)
}