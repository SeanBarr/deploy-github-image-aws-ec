import Container from 'react-bootstrap/Container'
import { BsGithub, BsLinkedin  } from "react-icons/bs";

const Footer = () => {
let date = new Date().getFullYear();
    return (
        <footer className="bg-blue-300 text-center">
            <Container>
            <p>Thank you for visiting my portfolio!
            Sean Barr All Rights Reserved. &copy;{date} 
            </p>
            <div>
            <a href="#" target="_blank" 
            rel="external noreferrer noopener"><BsGithub className="me-2 text-black"/><span className="visually-hidden">My GitHub Portfolio</span></a>
            <a href="#" target="_blank" 
            rel="external noreferrer noopener"><BsLinkedin className="text-black"/><span className="visually-hidden">My LinkdIn Account</span></a>   
            </div>
            </Container>
        </footer>
    )
}

export default Footer
