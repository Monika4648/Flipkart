import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 1,
    user: [],
    products: [],
    cart:[]
}
export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setusers: (state, action) => {
            state.user = action.payload
        },
        Logoutuser: (state, action) => {
            state.user = []
        },
        Addtocart:(state,action) => {
            state.cart = [...state.cart,action.payload]
        },
        Increaseqty:(state,action) => {
            state.cart = state.cart.filter(item=>action.payload.id===item.id?item.qty=action.payload.qty:item.qty)
        },
        Decreaseqty:(state,action) => {
            state.cart = state.cart.filter(item=>action.payload.id===item.id?item.qty=action.payload.qty:item.qty)
        },
        Deletecartitem:(state,action) => {
            state.cart = state.cart.filter(item=>action.payload.id!==item.id)
        }
      },
})

// Action creators are generated for each case reducer function
export const {
    setproducts,
    setusers , Logoutuser , Addtocart, Increaseqty, Decreaseqty, Deletecartitem  } = userReducer.actions

export default userReducer.reducer