import { Fragment } from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Receptionist from './components/Receptionist';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import './App.css'
import DocumentSideBar from './utils/DocumentSideBar';
import ReportingSideBar from './utils/ReportingSideBar'
import AppointmentSideNav from './utils/AppointmentSideNav';
import WaitingListSideBar from './utils/WaitingListSideBar';
import DashboardSideBar from './utils/DashboardSideBar';
import Patients from './components/Patients';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<Login/>} path='/' exact/>
              <Route element={<PrivateRoute/>} path=''>
              <Route element={<DashboardSideBar/>} path='dashboard'/>
              <Route element={<AppointmentSideNav/>} path='appointment'/>
              <Route element={<Patients/>} path='patients'/>
              <Route element={<WaitingListSideBar/>} path='waiting_list'/>
              <Route element={<DocumentSideBar/>} path='document'/>
              <Route element={<ReportingSideBar/>} path='reporting'/>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;


{/* <Router>
        <Fragment>
          <AuthProvider>
            <Routes>
                <Route element={<Receptionist/>} path='/' exact />
                {/* <Route path='/' element= {<Login/>} exact/> */}
                {/* <Route element = {<PrivateRoute/>} path='home'>
                  <Route element={<HomePage/>} path='dashboard' />
                </Route> */}
            {/* </Routes>
          </AuthProvider>
        </Fragment>
      </Router> */}
