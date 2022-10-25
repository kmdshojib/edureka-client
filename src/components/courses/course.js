import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Card,Button } from 'react-bootstrap'


const Course = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div className="container d-flex">
            <div>
                <h4>Course</h4>
                {
                    course.map((item, index) => 
                        (
                            <div key={index}>
                                <Link >{item.name}</Link>
                            </div>
                        )
                    )
                }
            </div>
            {/* course card */}
            <div >
                <div>
                    {
                        course.map(course =>(
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
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