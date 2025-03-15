import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext"; 
import assets from "../../assets/assets"; 

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, food_list } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Modify</p>
      </div>
      <hr />

      {food_list.map((food, index) => {
        if (cartItems[food._id] > 0) {
          return (
            <div key={index} className="cart-items-item">
              <img src={food.image} alt={food.name} />
              <p>{food.name}</p>
              <p>{food.price}</p>
              <p>{cartItems[food._id]}</p>
              <p>{cartItems[food._id] * food.price}</p>

              <div className="cart-counter food-item-counter">
                <img
                  onClick={() => removeFromCart(food._id)}
                  src={assets.remove_icon_red}
                  alt="Remove"
                />
                <p>{cartItems[food._id]}</p>
                <img
                  onClick={() => addToCart(food._id)}
                  src={assets.add_icon_green}
                  alt="Add"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Cart;
