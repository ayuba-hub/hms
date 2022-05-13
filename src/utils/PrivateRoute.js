import React, { useContext } from 'react';
import { Route,Navigate, Routes, Outlet} from 'react-router-dom'
import Authcontext from './AuthContext';

const PrivateRoute = ({children}) => {
  let {user} = useContext(Authcontext)

  return !user ?  <Navigate to='/'/> : <Outlet/>;
}

export default PrivateRoute;