import { useProductContext } from "./ProductContext";

const { createContext, useState, useContext, useEffect } = require("react");

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);

  return (
    <CartContext.Provider
      value={{
        quantity,
        setQuantity,
        cart,
        setCart,
        totalToPay,
        setTotalToPay
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const  useCartContext = () => {
  const {cart, quantity, setQuantity, setCart, totalToPay, setTotalToPay} = useContext(CartContext);
  const {closeModal} = useProductContext();

  function addToCart(product) {
    setCart((oldCart) => 
      [...oldCart, {...product, quantity: quantity}]
    )
    setQuantity(0);
    closeModal();
  }

  useEffect(() => {
    const newTotal = cart.reduce(
      (counter, product) => counter += (product.price * product.quantity), 0);
      setTotalToPay(newTotal);
      console.log("atualizou")
  }, [cart, setTotalToPay])
  
  function changeQuantity (newQuantity) {
    setQuantity(oldQuantity => oldQuantity += newQuantity); 
  }



  return ({
    quantity,
    setQuantity,
    changeQuantity,
    addToCart,
    totalToPay
  })
};
