import React, { useEffect, useState } from 'react'
import NavBar from '../utils/NavBar'
import SideBar from '../utils/SideBar'
import axios from 'axios'
import male from '../static/male.jpeg'
import female from '../static/female.jpeg'


const Patients = () => {

    const [patient, setPatient] = useState([])
    
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/patients/')
      .then(res=>{
          setPatient(res.data)
          console.log(res.data)
      })
      .catch(
          err=>(
              console.log(err)
          )
      )
    }, [])
    

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

    {patient.map(data=>{
        return(
        <div className="col mt-4">
            <div className="card card-body mt-4">
              {data.gender =='Male' ? (<div><img src={male}  style={{'height':'100px'}}/></div>):<div><img src={female} style={{'height':'100px'}}/></div>}
                {data.first_name} {data.last_name} {`[${data.enviro_ID}]`}<br/>
                {data.gender}<br/>
                {data.date_of_birth}<br/>
                {data.phone_number}
            </div>
        </div>
            )
        })}

   </div>
</div>
  )
}

export default Patients