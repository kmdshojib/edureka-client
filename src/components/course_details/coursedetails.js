import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'

import "./coursedetails.css"


const CourseDetails = () => {
    
    const[ description, setDescription] = useState([])
    const navigate = useNavigate()


    const param = useParams()
    useEffect(()=>{
      const url = `http://localhost:5000/coursedetails/${param.id}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setDescription(data))
    },[param])


    const {id,header,instructor,imageUrl,details,lesson,time,feature} = description
    
    // useEffect(() =>{
    //   const list = feature.map(items => <li>{items}</li>)
    //   setList(list)
    // },[])

    return (

      <div key={id} className="container mt-5">
         <div className='course-card mb-5'>
            <Image src={imageUrl} fluid  className="ms-3 mt-3"/>
            <h2 className='ms-3 mt-3'>{header}</h2>
            <p className='ms-3 mt-3 fw-bold'>Total classes:{lesson}</p>
            <p className='ms-3 mt-3 fw-bold text-muted'>Course Duration: {time} hours</p>
         </div>
         <div className='course-card-bottom'>
            <h2 className='ms-3 mt-3 mb-4'>About The Course</h2>
            <p className='ms-3 me-4 mt-3 w-70 lh-base'>{details}</p>
            <p className='ms-3 text-muted fw-bold mt-3 mb-3'>Instructor : {instructor}</p>
            <h2 className='ms-3'>What you will learn from this course</h2>
            <ul className='ms-3'>
              <li>{feature}</li>
            </ul>
         </div>
         <div>
            <Button varient="priamry" onClick={() => navigate(`/checkout/${id}`)}>Get Premium Access</Button>          
         </div>
      </div>
    )
}

export default CourseDetails