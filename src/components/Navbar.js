import { Link } from 'react-router-dom';
import RBNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navbar = () => {
    return (
        <RBNavbar>
            <Container>
            <RBNavbar.Brand href="/">Movie Data Base</RBNavbar.Brand>
            <RBNavbar.Toggle />
            <RBNavbar.Collapse>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/movie-list">Movie List</Nav.Link>
                </Nav>
            </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
        
    );
}

export default Navbar;