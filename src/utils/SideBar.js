import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Appointment from '../components/Appointment'
import Authcontext from './AuthContext'
import NavBar from './NavBar'


const SideBar = () => {
  let {user} = useContext(Authcontext)
  let {loginUser} = useContext(Authcontext)
  console.log(user.profile)

  return (  
    <ul>
        <Link to='/dashboard' className="nav-link text-white m-2">
        <i className="mx-2 bi bi-house-door text-dark fs-5"></i>
        Dashboard
        </Link>
        <div className="dropdown-divider"></div>
        <Link to='/appointment' className="nav-link text-white m-2">
        <i className="mx-2 bi bi-newspaper text-dark fs-5"></i>
        Appointment
        </Link>
        
        <div className="dropdown-divider"></div>
        <Link to='/waiting_list' className="nav-link text-white m-2">
        <i className="mx-2 bi bi-person-rolodex text-dark fs-5"></i>
        Waiting List
        </Link>

        {user.position =='cashier' ? (
            <div>
            <div className="dropdown-divider"></div>
            <Link to='/waiting_list' className="nav-link text-white m-2">
            <i className="mx-2 bi bi-person-rolodex text-dark fs-5"></i>
            Billing
            </Link>
            </div>
        ):''}


        <div className="dropdown-divider"></div>
        <Link to='/document' className="nav-link text-white m-2">
        <i className="mx-2 bi bi-paperclip text-dark fs-5"></i>
        Documents
        </Link>
        <div className="dropdown-divider"></div>
        <Link to='/reporting' className="nav-link text-white m-2">
        <i className="mx-2 bi bi-journals text-dark fs-5"></i>
        Reporting
        </Link>
    </ul>
  )
}

export default SideBar

