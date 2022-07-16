import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function addToCartClick(){
    setInCart((inCart) => !inCart)

  }
  return (
    <li className={inCart ? "incart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={inCart ? "remove" : "add"}
       onClick={addToCartClick}
       >
        {inCart ? "remove from cart" :"add "}
      Add to Cart
      </button>
    </li>
  );
}

export default Item;
