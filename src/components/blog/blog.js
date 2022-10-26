import React from 'react'
import { Accordion } from 'react-bootstrap'

 const Blog = () => {
  return (
    <div className='container w-75'>
        <Accordion defaultActiveKey="0" className='w-70 mt-5'>
        <Accordion.Item eventKey="0">
            <Accordion.Header>what is `cors`?</Accordion.Header>
            <Accordion.Body>
            Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Why are you using `firebase`?</Accordion.Header>
            <Accordion.Body>
            I'm using `firebase` to authenticate a user and to hoast.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>What other options do you have to implement authentication?</Accordion.Header>
            <Accordion.Body>
                Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?”.we got lot of new concepts and technologies in the market.<br />
                Cookie-Based authentication<br />
                Token-Based authentication<br />
                Third party access(OAuth, API-token)<br />
                OpenId <br />
                SAML
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>How does the private route work?</Accordion.Header>
            <Accordion.Body>
            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
            <Accordion.Body>
            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>  
  )
}

export default Blog

