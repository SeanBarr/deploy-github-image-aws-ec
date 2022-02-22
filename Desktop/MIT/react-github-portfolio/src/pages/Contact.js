import {Card} from 'react-bootstrap'

const Contact = () => {
   return (
     <>
       <h1 className='d-flex align-items-center justify-content-center pb-3'>
         Contact Page
       </h1>
       <Card
         className='container card text-center overflow bg-blue-300'
         style={{ width: '31.25rem' }}
       >
         <Card.Body>
           <Card.Img
             src='https://images.unsplash.com/photo-1589014768848-951d7d3415b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2970&q=80'
             alt='map'
           ></Card.Img>
           <Card.Text>
             Thank you for visiting this page and looking at my projects. I
             would love to hear more about you, and your projects, please fill out this form and lets work
             together!
             <form
               target='_blank'
               action='https://formsubmit.co/3e8a622b38d1906bc6fcbfde4dcb407a'
               method='POST'
             >
               <input
                 type='text'
                 name='name'
                 class='form-control'
                 placeholder='Full Name'
                 required
               />
               <input
                 type='email'
                 name='email'
                 class='form-control'
                 placeholder='Email Address'
                 required
               />
               <textarea
                 placeholder='Your Message'
                 class='form-control'
                 name='message'
                 rows='5'
                 required
               ></textarea>
               <button
                 type='submit'
                 className='btn btn-lg btn-light btn-block m-3'
               >
                 Submit Form
               </button>
             </form>
           </Card.Text>
         </Card.Body>
       </Card>
     </>
   )
 };

export default Contact
