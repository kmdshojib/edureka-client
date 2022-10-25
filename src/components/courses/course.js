import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Card,Button } from 'react-bootstrap'
import './course.css'

const Course = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="container d-flex mt-5">
            <div className="me-5">
                <h4>Course</h4>
                {
                    course.map((item, index) => 
                        (
                            <div className='mb-3' key={index}>
                                <Link className="fw-bold">{item.name}</Link>
                            </div>
                        )
                    )
                }
            </div>
            {/* course card */}
            <div >
                <div className="course-grid">
                    {
                        course.map(({id,imageUrl,name,lesson,time}) =>(
                            <Card key={id} style={{ width: '18rem' }}>
                                <Card.Img className='card-img' variant="top" src={imageUrl} />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{name}</Card.Title>
                                    <Card.Text>Total Lessons: {lesson}</Card.Text>
                                    <Card.Text className="fw-bold text-muted">Total Duration: {time} hours</Card.Text>
                                    <Button variant="primary">Show More</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}

export default Course