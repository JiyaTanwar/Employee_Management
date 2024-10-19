
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Header.css"
const Header=()=>{
    return(
<>
<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><strong>Employee Management System</strong></Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Nav>
            <Navbar.Brand href="/">Employees</Navbar.Brand>
            <Navbar.Brand eventKey={2} href="/employees">
              Post Employee
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
</>
    );

}
export default Header;