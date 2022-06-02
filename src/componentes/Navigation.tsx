import { Button, ButtonToolbar, Form, FormControl, Nav, Navbar, NavbarBrand, Tab } from "react-bootstrap"

export const Navigation = () => {

    return(
        <>
            <Navbar className="navbar navbar-dark bg-dark">
              <Navbar.Brand href="/home">Home</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/Promociones">Promociones</Nav.Link>
                <Nav.Link href="/DondeEstamos?">Donde Estamos?</Nav.Link>
              </Nav>
              
            </Navbar>
        </>
    )
}