import React, { useContext } from 'react'
import Authcontext from '../utils/AuthContext'
import SidebarMenu, { SidebarMenuNav } from 'react-bootstrap-sidebar-menu';

const HomePage = () => {
  let {user,logoutUser} = useContext(Authcontext)
  return (
    <div>
      {/* <h1>hello</h1>
      {user && <p>Hello {user.username}</p>}

      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ):(
        <p>Login</p>
      )} */}
    </div>
  )
}

export default HomePage;