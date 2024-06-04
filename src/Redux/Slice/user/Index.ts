import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type User = {
    name:string,
    email:string
}
export interface UserState {
  user: User,
  isLogged:boolean
}

const initialState: UserState = {
  user: localStorage.getItem('kickStreetUser')? JSON.parse(localStorage.getItem('kickStreetUser')|| " ") : localStorage.setItem('cart',JSON.stringify([])),
  isLogged :  localStorage.getItem('kickStreetUser')? true:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  },
})

export const {addUser } = userSlice.actions

export default userSlice.reducer