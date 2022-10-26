import React from 'react'
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
  return (
    <div className='container mt-5 w-75'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Will you suppoort when course ends?</Accordion.Header>
        <Accordion.Body>
          yes, we will surely be able to support you will finish the course!!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What this course contains?</Accordion.Header>
        <Accordion.Body>
          This course contains the following curriculum will be given to you.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default FAQ