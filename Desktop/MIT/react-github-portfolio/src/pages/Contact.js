import { useState } from 'react'
import {Card, Form} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formsubmit.co/3e8a622b38d1906bc6fcbfde4dcb407a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
  } catch(error) {
    console.log(error.message)
    }
    setSuccess(true)
  }
   
    return (
      <>
      {success? <Navigate to='/Thanks'/> : 
      <>
        <h1 className='d-flex align-items-center justify-content-center pb-3'>
          Contact Page
        </h1>
        <Card
          className='container card overflow bg-blue-300'
          style={{ maxWidth: '31.25rem' }}
        >
          <Card.Body>
            <Card.Img
              src='https://images.unsplash.com/photo-1589014768848-951d7d3415b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80'
              alt='map'
            ></Card.Img>
            <Card.Text className='mb-3'>
              Thank you for visiting this page and looking at my projects. I
              would love to hear more about you, and your projects, please fill
              out this form and lets work together!
            </Card.Text>
            <Form
              onSubmit={handleSubmit}
            >
              <Form.Group className='mb-3' controlId='nameId'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  onSubmit={(e) => setName(e.target.value)}
                  placeholder='Full Name'
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='emailId'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  onSubmit={(e) => setEmail(e.target.value)}
                  placeholder='Email Address'
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='messageId'>
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as='textarea'
                  onSubmit={(e) => setMessage(e.target.value)}
                  placeholder='Your Message'
                  name='message'
                  rows={5}
                  required
                ></Form.Control>
              </Form.Group>
              <button type='submit' className='btn btn-lg btn-light btn-block'>
                Submit Form
              </button>
            </Form>
          </Card.Body>
        </Card>
        </>
    }
    </>
    )
 };

export default Contact
