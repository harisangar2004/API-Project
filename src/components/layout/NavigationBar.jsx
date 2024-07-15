import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
    return (
        <>
            <Navbar sticky="top" bg="light" varient="light" className="p-2">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Simple Client</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/create" >Create User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>  
        </>
    )
};

export default NavigationBar ;