import React, { useContext } from 'react'
import Authcontext from '../utils/AuthContext'
import '../static/css/login.css'
import logo from '../static/mayub_logo.png'
import { Link } from 'react-router-dom'


const Login = () => {
  
  let {user} = useContext(Authcontext)
  let {loginUser} = useContext(Authcontext)
  return (
    <div className=" mycol col-sm-12 col-md-5 m-4 float-md-end">
        <div className="card card-body" style={{'marginTop':'10%','width':'400px'}}>
          <h4 className='text-center'>Login To Mayub Health</h4>
          <img src={logo} className='mx-auto' alt="logo" srcset="" style={{'width':'200px'}} />
          <form className='form-control' onSubmit={loginUser}>
            <input className='form-control border-success ' placeholder='Username' type="text" name="username" id="username" />
            <input className='form-control border-success mt-3' placeholder='Password' type="password" name="password" id="password" />
            <button className='mt-2 btn w-100 btn-block text-light' style={{'backgroundColor':'#023C19'}} type="submit">Login</button>
            <div className="mb-3 mt-4 form-check form-switch" style={{'marginLeft':'20px'}}>
              <input className="form-check-input bg-success border-success" style={{'width':'50px','height':'25px'}} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
              <label className="form-check-label mb-2 mx-2 my-2" htmlFor="flexSwitchCheckChecked">Remember My Login</label>
            </div>
            <p className='text-center'><i className='bi bi-question-circle'></i> Please uncheck this if on a public device</p>
            <Link to='#' className='float-end'><i className='bi bi-shield-exclamation'></i> Privacy and Terms</Link>
          </form>
        </div>
    </div>
  )
}

export default Login