import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import "./coursedetails.css"


const CourseDetails = () => {
    
    const[ description, setDescription] = useState([])

    const param = useParams()
    useEffect(()=>{
      const url = `http://localhost:5000/coursedetails/${param.name}`
      fetch(url)
      .then((res) => res.json())
      .then((data) => setDescription(data))
    },[param])

    const {id,header,instructor,imageUrl,details,lesson,time} = description

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
         </div>
      </div>
    )
}

export default CourseDetails