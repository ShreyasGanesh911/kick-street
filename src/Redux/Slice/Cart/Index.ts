import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type Cart = {
    pId:string,
    name:string,
    qty:number,
    price:number
}
export interface CounterState {
  cart: Cart[]
}

const initialState: CounterState = {
  cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')|| " ") : localStorage.setItem('cart',JSON.stringify([]))
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload
    },
  },
})

export const {addToCart } = cartSlice.actions

export default cartSlice.reducer