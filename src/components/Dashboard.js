import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../utils/AuthContext'


const Dashboard = () => {

    let {user} = useContext(Authcontext)
  return (
    <div className='container'>
        <h4 className='mt-4 text-dark'>Welcome {user.username}</h4>
        <p className="small text-dark">How do you wish to continue?</p>
        <div className="dropdown-divider"></div>
        <div className="row">

            <div className="col">
                <div className="card card-body">
                    <Link to='/appointment' className='nav-link'><i className="bi bi-calendar"></i> Schedule An Apointment</Link>
                </div>
            </div>
            <div className="col">
                <div className="card card-body">
                    <div className="dropdown">
                        <Link to='#' className="nav-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-file-person mx-2"></i>Open Patient Profile
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-people"></i>Create Patient</a></li>
                            <li><a className="dropdown-item" href="/patients"><i className="bi bi-eye"></i>View All Patients</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-files"></i>Create Invoice</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-body">
                    <Link to='#' className='nav-link'><i className="bi bi-book mx-2"></i>View Reports</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard