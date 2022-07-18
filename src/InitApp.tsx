import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const InitApp = (props: Props) => {
  let navigate = useNavigate();

  useEffect(() => {
    //check if token exists and is valid then redirect appropriately
    if(localStorage.getItem("token") == null) {
      console.log("NO TOKEN");
      return navigate('/login')
    }
    else {
      //validate token
    }
  },[])
  return (
    <div>InitApp</div>
  )
}

export default InitApp