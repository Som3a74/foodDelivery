import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                {" "}
                <div className="cart-item-title cart-items-item">
                  {" "}
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>{" "}
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 7}</p>
            </div>{" "}
            <hr />
            <div className="cart-total-details">
              <p>Total</p>

              <b>${getTotalCartAmount() ? getTotalCartAmount() + 7 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Checkout Now</button>
        </div>
        <div className="cart-promocode">
          <p>Apply Promocode</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Promocode" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
