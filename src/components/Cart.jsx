import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import '../App.css'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
     <h2 style={{textAlign: "center"}}>Your Cart</h2>
    <div className="cart">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              /><br></br>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          </div>
        ))
      ):(
        <h1>Add products to the cart!! Your cart is empty🥲</h1>
      )}
    </div>
    <h3 className='total-price'>SubTotal: ${totalPrice.toFixed(2)}</h3>

    </>
  );
};

export default Cart;
