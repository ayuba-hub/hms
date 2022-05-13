import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Authcontext from './AuthContext'
import NavBar from './NavBar'
import SideBar from './SideBar'


const DashboardSideBar = () => {
  let {user} = useContext(Authcontext)
  let {loginUser} = useContext(Authcontext)
  console.log(user.profile)

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
             <Dashboard/>
         </div>
       </div>
    </div>
  )
}

export default DashboardSideBar

