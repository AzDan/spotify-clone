import React from 'react';
import { loginUrl } from './helper/spootify';
import logo from './assets/images/spootify-logo.png';
import './assets/styles/login.scss';

type Props = {}

const Login = (props: Props) => {

  return (
    <div className='page-container'>
      <div className='login-container'>
        <img className="logo-img" src={logo} alt="Spootify logo"/>
        <h1>SPOOTIFY</h1>
        {/* <button onClick={() => setLogin()}></button> */}
        <a href={loginUrl}>LOGIN</a>
      </div>
    </div>
  )
}

export default Login