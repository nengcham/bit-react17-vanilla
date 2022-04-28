import React, { useState } from 'react';
import { Login } from '@/components';
import { login } from '@/modules/auth/user'
import { connect, useDispatch } from 'react-redux';

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
        // window.location.href = "./login"
    }
  return (
    <Login onChange={onChange} onSubmit={onSubmit}/>
  );
};

export default connect(
  state => ({
    loginUser: state.loginUser
  }),
  {
    login
  }
)(LoginPage);