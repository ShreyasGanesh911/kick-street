import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type Cart = {
    pId:string,
    name:string,
    qty:number,
    price:number,
    size:number
}
type PayLoad = {
  id : string
  qty : number
}
export interface CartState {
  cart: Cart[]
}

const initialState: CartState = {
  cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')|| " ") : localStorage.setItem('cart',JSON.stringify([]))
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload
    },
    removeFromCart:(state,action: PayloadAction<string>)=>{     
      state.cart =  state.cart.filter((e)=>e.pId !== action.payload)
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    updateQty :({cart},{payload}: PayloadAction<PayLoad>)=>{ 
        cart.forEach((e)=>{
          if(e.pId === payload.id)
            e.qty = payload.qty
        })
        localStorage.setItem('cart',JSON.stringify(cart))
    }
  },
})

export const {addToCart,removeFromCart,updateQty } = cartSlice.actions

export default cartSlice.reducer