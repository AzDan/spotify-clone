import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/spootify-logo.png'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='sidebar'>
      <div className='logo-title'>
        <img className="logo-img" src={logo} alt="Spootify logo"/>
        <span className='title'>Spootify</span>
      </div>
      <div className=''>
        <ul>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar