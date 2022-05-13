import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Appointment from '../components/Appointment'
import WaitingList from '../components/WaitingList'
import NavBar from './NavBar'
import axios from 'axios'
import Authcontext from './AuthContext'
import SideBar from './SideBar'

const AppointmentSideNav = () => {
  let {user} = useContext(Authcontext)


  // useEffect(()=>{
  //   axios.get('http://127.0.0.1:8000/api/users/')
  //   .then((res,data)=>{
  //     data = res.data;
  //     setPossition(res.data)

  //   })
  // },[])


  return (
    <div>
        <NavBar/>
        <div className="row">
            
         <div className="col-md-3 d-none d-sm-block" style={{'marginRight':'0','paddingRight':'0','backgroundColor':'rgb(98,150,119,.54)','height':'100vh'}}>
           <div className="container" style={{'marginTop':'60px'}}>
             <div className="nav">
               <SideBar/>
             </div>
           </div>
         </div>

         <div className="col">
             <Appointment/>
         </div>

       </div>
    </div>
  )
}

export default AppointmentSideNav