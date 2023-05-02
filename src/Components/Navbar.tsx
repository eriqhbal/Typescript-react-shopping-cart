import React from 'react';
import {Container, Nav, Button, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {useShoppingCart} from "../Context/ShoppingCartContext";

// Images
import CartImages from "../assets/icons/shopping-cart.png";


type Props = {}

const Navbar = (props: Props) => {
   const {openCart, cartQuantity} = useShoppingCart();
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
         <Nav>
            <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
            <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
            <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
         </Nav>
      </Container>
      {cartQuantity > 0 && 
      <Button onClick={openCart} style={{width: "3rem", height: "3rem", marginRight: "15px", position: "relative"}} variant='outline-primary' className='rounded-circle'>
         <img src={CartImages} style={{width: "25px"}} alt='/Cart'/>
         <div className='bg-danger rounded-circle d-flex justify-content-center align-items-center' style={{width: "1.5rem", height: "1.5rem",bottom: 0, right: 0, position: "absolute", color: "white", transform: "translate(25%, 25%)"}}>
            {cartQuantity}
         </div>
      </Button>}
    </NavbarBs>
  )
}

export default Navbar