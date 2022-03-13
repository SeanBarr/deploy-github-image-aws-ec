import { Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <h1 className='text-black d-flex align-items-center justify-content-center fw-bold text-large'>
        Sean's Portfolio
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
          Thank you for visting my GitHub Website. I'm located in the Greater
          NYC Area.
          <br></br>
          I’m currently enrolled in MIT xPRO's Professional Certificate in
          Coding: Full Stack Development with MERN.
          <br></br>
          When I am not learning how to code, I enjoy the time I have with my
          family, martial arts, and meditation.
        </p>
      </Card>
      <Link
        to='/projects'
        className='btn btn-outline-danger pb-2 btn-lg mt-5 d-flex align-items-center justify-content-center'
        style={{ width: '15.625rem', height: '4.25rem', margin: 'auto' }}
      >
        View My Work
      </Link>
    </>
  )
}

export default Home
