import { createContext, useState } from "react";

const CartContext = createContext({});

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    if (!isInCart(product.id)) {
      const item = {
        ...product,
        quantity
      };
      setCart([...cart, item]);
    } else {
      // actualizar quantity
      const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id));
      // creamos un borrador del item
      const itemDraft = { ...cart[itemIndex] };
      // actualizamos la Cantidad
      itemDraft.quantity = itemDraft.quantity + quantity;
      // Borrador del carrito
      const cartDraft = [...cart];
      // actualizamos el carrito
      cartDraft[itemIndex] = itemDraft;
      // cart[itemIndex] = itemDraft; NO USAR
      setCart(cartDraft);

    }
  }

  const removeItem = (itemId) => {
    const cartDraft = cart.filter((item) => item.id !== itemId);
    setCart(cartDraft);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => cart.some((item) => item.id === parseInt(id));

  const total = cart.reduce((count, item) => count + (item.price * item.quantity), 0);

  const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, total, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
};
