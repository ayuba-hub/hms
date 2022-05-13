import React from 'react'
import { Link } from 'react-router-dom'
import Document from '../components/Document'
import NavBar from './NavBar'
import SideBar from './SideBar'

const WaitingListSideBar = () => {
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
             <Document/>
         </div>
         
       </div>
    </div>
  )
}

export default WaitingListSideBar