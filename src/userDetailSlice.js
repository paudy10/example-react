import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';

const initialState = {
    role: 'client',
    username: '',
    email: '',
    password: '',
    id: '',
    plan: ''
}

function updateUserDetails(state) {
    const token = localStorage.getItem('token')
    if (token != null) {
        var decoded = jwt_decode(token);
        state.email = decoded.details.email;
        state.id = decoded.details.id
        state.username = decoded.details.username;
        state.password = decoded.details.password;
        if (decoded.details.plan === 'PlanFree') {
            state.plan  = "رایگان"
        }
        else {
            state.plan = "غیر رایگان"
        }

        if (decoded.details.isUser === true) {
            (state.role = 'user')
        } else if (decoded.details.isAdmin === true) {
            state.role = 'admin'
        }
    }
    else {
        state.role = 'client'
    }
}
function logOutOfAccount(state) {
    localStorage.removeItem('token');
    state.role = 'client';
    toast.success('با موفقیت خارج شدید !');
}

const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState,
    reducers: {
        updateUserDetails,
        logOutOfAccount
    }
})

export const {
    updateUserDetails: updateUserDetailsAction,
    logOutOfAccount: logOutOfAccountAction
} = userDetailSlice.actions

export default userDetailSlice.reducer;
