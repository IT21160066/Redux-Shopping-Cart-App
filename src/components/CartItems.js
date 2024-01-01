import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartIems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartIems.map((item) => (
          <li key={item.id}>
            {""}
            <CartItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              quantity={item.quantity}
              name={item.name}
            />
            {""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
