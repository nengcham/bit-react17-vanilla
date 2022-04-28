import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import { HYDRATE } from "next-redux-wrapper"
import axios from "axios"
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}
const initialState = {
    registerResult: '',
    loginUser: undefined
}

const USER_REGISTER = 'auth/USER_REGISTER';
const USER_REGISTER_SUCCESS = 'auth/USER_REGISTER_SUCCESS';
const USER_REGISTER_FAIL = 'auth/USER_REGISTER_FAIL';

export const userRegister = createAction(USER_REGISTER);

const userRegisterApi = async (payload) => await axios.post(
    `${SERVER}/user/join`, 
    payload, 
    {headers}
    )

function* userRegister(action) {
    try{
        const response = yield userRegisterApi()
        const newUser = yield response.json()
        yield put(newUser.data)
    }catch(error){
        yield put()
    }
}
export function* watchUserRegister() {
    yield takeLatest(USER_REGISTER, userRegister);
}

const USER_LOGIN = 'auth/USER_LOGIN';
export const userLogin = createAction(USER_LOGIN);
function* userLogin(action) {
    try{
        const response = yield fetch()
        const loginUser = yield response.json()
        yield put(loginUser.data)
    }catch(error){
        yield put()
    }
}
export function* watchUserLogin() {
    yield takeLatest(USER_LOGIN, userLogin);
}

const auth = (state = initialState, action) => {
    switch (action.type){
        case HYDRATE:
            console.log(' ### HYDRATE Issue 발생 ### ')
            return {...state, ...action.payload}
        case USER_REGISTER_SUCCESS:
            console.log(' ### 회원가입 성공 ### '+action.payload)
            return {...state, registerResult: action.payload}
    }
}
export default auth