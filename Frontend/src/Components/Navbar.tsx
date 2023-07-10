import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import EmployeeSVG from "../rodentia-icons_contact-add.svg"

export function Navbar() {
    return (
        <NavbarBs sticky = "top" className = "bg-white shadow-lg mb-3">
            <Container>
                <Nav className = "me-auto">
                    <Nav.Link  to = "/" as = {NavLink}>Home Page</Nav.Link>
                    <Nav.Link  to = "/Employees" as = {NavLink}>Employees List</Nav.Link>
                    <Nav.Link  to = "/Holiday" as = {NavLink}>Holiday List</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to = "/addEmployee" as = {NavLink}>
                        <img style = {{width : 40, height : 40}} src = {EmployeeSVG} alt = ""/>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}