import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <Navbar as="header" bg="blue-300" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="my-navbar" />
          <Navbar.Collapse id="my-navbar">
            <Nav as="ul" className="me-auto" defaultActiveKey="/">
              <Nav.Item as="li">
              <Nav.Link as={ Link } to="/" href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Nav.Link as={ Link } eventKey="projects" to="/projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Nav.Link as={ Link } eventKey="skills" to="/skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Nav.Link as={ Link } eventKey="contact" to="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}

export default NavBar
