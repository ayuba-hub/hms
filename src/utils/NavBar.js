import React from 'react';
import logo from '../static/mayub_logo2.png';
import '../static/css/sidebar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=''>
        <div className='row'>
            <div className="col" style={{}}>
                <div className="row">
                  
                  <div className="col" style={{'height':'80px','backgroundColor':'#557f66'}}>
                    <img src={logo} className='mt-2 mx-2' alt="logo" style={{'height':'50px'}}/>
                  </div>

                  <div className="col-md-9" style={{'height':'80px','backgroundColor':'#669e7c'}}>
                    <div className="row mt-4" >

                      <div className="col" style={{'paddingRight':'0px'}}>
                          <div className="container input-group">
                            <button className='input-group-text'><i className="bi bi-search"></i></button>
                            <input className='form-control' placeholder='Search patient' type="text" name="" id="" />
                          </div>
                      </div>
                       
                      <div className="col">
                        <ul className='list-unstyled'>
                        <li className='float-end'>
                          <button className='btn btn-primary dropdown-toggle'>Ayuba</button>
                        </li>

                          <li className="float-end mx-2">
                          <button className='btn btn-outline-success text-light'>
                            <i className="bi bi-justify text-dark"></i>
                            Menu
                          </button>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavBar