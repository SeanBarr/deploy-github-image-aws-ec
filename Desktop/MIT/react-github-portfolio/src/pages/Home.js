import { Card, Container, Button, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <h1 className='text-white d-flex align-items-center justify-content-center fw-bold text-large'>
        Sean Barr
      </h1>
      <h2 class='text-medium text-white text-uppercase d-flex align-items-center justify-content-center'>
        Full-Stack Developer
      </h2>
      <Card
        className='container card text-center overflow bg-blue-300 flex-grow-1'
        style={{ width: '31.25rem' }}
      >
        <p className='text-white'>
          Hi, I’m Sean Barr.
          <br></br>
          Thank you for visting my GitHub Website.
          I'm located in the Greater NYC Area.
          <br></br>
          I’m currently enrolled in MIT xPRO's Professional Certificate in
          Coding: Full Stack Development with MERN.
          <br></br>
          When I am not learning how to code, I enjoy the time I have with my
          family, martial arts, and meditation.
        </p>
      </Card>
      <a
        className='btn btn-outline-light pb-1 btn-md mt-3 d-flex align-items-center justify-content-center'
        href='/projects'
        target='_blank'
      >
        View My Work
      </a>
    </>
  )
}

export default Home
