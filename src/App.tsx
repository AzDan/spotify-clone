import React, { useEffect, useState } from 'react';
import Home from './home';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAccessToken, setAuthToken, setRefreshToken } from './redux/actions/actionCreators';


function App() {

  const [searchParam] = useSearchParams();
  const dispatch = useDispatch()
  var authCode = searchParam.get('code')
  var errorMsg = searchParam.get('error')

  useEffect(() => {
    let ignore = false;

    if(authCode != null) {
      if(!ignore) {
        dispatch(setAuthToken(authCode))
        axios.get('/getToken', {
          params: {
            code: authCode
          }
        })
        .then(response => {
          console.log(response.data)
          dispatch(setAccessToken(response.data.accessToken))
          dispatch(setRefreshToken(response.data.refreshToken))
        })
      }
    }
    else if(errorMsg != null) {

    }

    return () => {
      ignore = true;
    };
  },[authCode, errorMsg, dispatch]);

  return (
    <div className="App"> 
      <Home/>
    </div>
  );
}

export default App;
