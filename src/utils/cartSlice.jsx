import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",  //Name of this slice
    initialState: {
        //state of the slice
        items: [],
    },
    //reducer funcions for each function
    reducers: {
        addItem: (state, action) => {
            //modify state based on the action - Mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

//export two things actions and reducers
export const {addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;