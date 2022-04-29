import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Login } from '@/components';
import { loginRequest} from '@/modules/auth/login'

const LoginPage = () => {
    const [user, setUser] =useState({
        userid:'', password:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    const onSubmit = e => {
        e.preventDefault()
        alert('로그인 정보: '+JSON.stringify(user))
        dispatch(loginRequest(user))
    }
  return (
    <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest}
export default connect(mapStateToProps, loginActions)(LoginPage)
