import logo from '../assets/img/NOH-LOGO-cor.png'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
/*<<<<<<< HEAD
 
=======

>>>>>>> 62f84e2 (no message)*/
  
} from 'reactstrap';

const Navbar1 = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>      
      <Navbar {...args} className="my-2" color="light" light>                     
      <NavbarBrand href="/"><img src={logo} alt="Noh" srcSet="" height="100"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="">Nós</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Parceiros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://www.linkedin.com/company/noh/'>LinkedIn</NavLink>
            </NavItem>        
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar1;


/*<<<<<<< HEAD
=======

>>>>>>> 62f84e2 (no message)*/
