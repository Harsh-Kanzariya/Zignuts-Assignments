import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : []
}


export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        setUsers : (state, action) =>{
            state.users = action.payload ?? [];
        },

        toggleLikeBtn : (state, action) => {
            state.users = state.users.map( (user) => {
                return (user.id === action.payload) ? {...user, liked: !user.liked} : user
                }
            )
        },

        updateUserDetails : (state,action) => {
            state.users = state.users.map( (user) => {
                return (user.id === action.payload.id)? {...user, ...action.payload} : user
            })
        },

        deleteUser : (state, action) => {
            state.users = state.users.filter( (user) => user.id !== action.payload)
        }

    }
})

export const {toggleLikeBtn, updateUserDetails, deleteUser, setUsers} = userSlice.actions

export default userSlice.reducer