import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Product.css";

/*eslint-disable */
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addtoCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;