import React, { Component } from 'react'
import  {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap'
import './estilo.css'

class Escritorio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abrirMenu: false
    }
  }

  abrirMenu = () => {
    this.setState({abrirMenu: !this.state.abrirMenu})
    console.log(`abrir menú: ${this.state.abrirMenu}`)
  }

  onSelect(key) {
    console.log(key)
  }

  onS
  render() {
    return (
      <div className="pantalla">
        <Navbar inverse collapseOnSelect onSelect={this.onSelect}>
           <Navbar.Header>
             <Navbar.Brand>
               <span onClick={this.abrirMenu}>MENU</span>
             </Navbar.Brand>
             <Navbar.Toggle />
           </Navbar.Header>
           <Navbar.Collapse>
             <Nav>
               <NavItem eventKey={1} href="#">Lasdasdink</NavItem>
               <NavItem eventKey={2} href="#">Linkasdasd</NavItem>
               <NavItem eventKey={2} href="#">Lasdasdasdink</NavItem>
               <NavItem eventKey={2} href="#">Lasdasdink</NavItem>
               <NavItem eventKey={2} href="#">Liasdasdasdnk</NavItem>
               <NavItem eventKey={2} href="#">Lasdasdink</NavItem>
               <NavItem eventKey={2} href="#">Linasdasdk</NavItem>
               <NavItem eventKey={2} href="#">Lasdasdink</NavItem>
               <NavItem eventKey={2} href="#">Liasdasdasdnk</NavItem>
               <NavItem eventKey={2} href="#">Linasdasdk</NavItem>
             </Nav>
             <Nav pullRight>
               <NavItem eventKey={1} href="#">Link Right</NavItem>
               <NavItem eventKey={2} href="#">Link Right</NavItem>
             </Nav>
           </Navbar.Collapse>
         </Navbar>
      </div>
    )
  }
}

export default Escritorio
