import React from 'react'
import { Stack, Button } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext';
import storeItem from '../Data/items.json';
import numberFormatter from '../Utilities/numberFormatter';

type CartItemProps = {
   id: number
   quantity: number
}

const CartItem = ({id, quantity}: CartItemProps) => {
   const {removeFromCart} = useShoppingCart();
   const item = storeItem.find(i => i.id === id);
   if(item == null) return null;
  return (
    <Stack gap={2} direction="horizontal" className="d-flex align-items-center">
      <img
        src={item.urlImage}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 0 && (
            <span className="text-muted" style={{ fontSize: ".70rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {numberFormatter(item.price)}
        </div>
      </div>
      <div>{numberFormatter(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >&times;</Button>
    </Stack>
  );
}

export default CartItem