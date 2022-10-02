import Item from "../ItemList/Item"
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(value);
  };

  return (
    <>
      <Item product={product} />
      <h4>Cantidad {count}</h4>
      <button onClick={() => handleClick(count - 1)}>-</button>
      <button onClick={() => handleClick(count + 1)}>+</button>
    </>
  );
}
 
export default ItemDetail;