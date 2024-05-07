import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarPrimary() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" style={{height:'60px'}}>
        <Container>
          <Navbar.Brand href="./Homepage">NumeFirma</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Homepage">Home</Nav.Link>
            <Nav.Link href="./LoginForm">Login</Nav.Link>
            <Nav.Link href="./RegisterForm">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPrimary;