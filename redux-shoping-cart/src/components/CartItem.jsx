import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

/*eslint-disable */
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(
      cartActions.addtoCart({
        name,
        id,
        price,
      })
    );
  };
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItems} className="cart-actions">
        -
      </button>
      <button onClick={incrementCartItem} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;