import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'
import ReactToPdf  from "react-to-pdf";

import "./coursedetails.css"
const ref = React.createRef();

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


    return (
      <div className='container'>
         <ReactToPdf  targetRef={ref} filename="course-detils.pdf">
            {({ toPdf }) => <button className='btn btn-primary mt-5 contianer' onClick={toPdf}>Download Course Details</button>}
         </ReactToPdf>
    
         <div key={id} className="mt-5" ref={ref}>
            <div className='course-card mb-5'>
               <Image src={imageUrl} fluid  className="ms-3 mt-3 "/>
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
                  {feature?.map(item =>(
                     <li>{item}</li>
                  ))}
               </ul>
            </div>
            <div>
               <Button className='mb-5 mt-5 offset-5' varient="priamry" onClick={() => navigate(`/checkout/${id}`)}>Get Premium Access</Button>          
            </div>
         </div>
      </div>
    )
}

export default CourseDetails