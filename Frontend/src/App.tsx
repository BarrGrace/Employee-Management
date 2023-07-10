import {Routes, Route} from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./Pages/Home"
import { Navbar } from "./Components/Navbar"
import { AddEmployee } from "./Pages/addEmployee"
import { Employees } from "./Pages/Employees"
import { Holidays } from "./Pages/Holidays"

function App() {
  return (
    <>
    <Navbar/>
    <Container className = "mb-4">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/addEmployee" element = {<AddEmployee/>}/>
        <Route path = "/Employees" element = {<Employees/>}/>
        <Route path = "/Holiday" element = {<Holidays/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
