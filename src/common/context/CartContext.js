import { useProductContext } from "./ProductContext";
import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();
CartContext.displayName = "Cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalToPay, setTotalToPay] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalToPay,
        setTotalToPay,
        showCart,
        setShowCart,
        showSnackBar,
        setShowSnackBar
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const {
    cart,
    setCart,
    totalToPay,
    setTotalToPay,
    showCart,
    setShowCart,
    showSnackBar,
    setShowSnackBar
  } = useContext(CartContext);

  const { closeModal, quantity, setQuantity } = useProductContext();

  function addToCart(newProduct) {
    const productExist = cart.some((product) => product.id === newProduct.id);
    setShowSnackBar(true);
    closeModal();
    if (!productExist) {
      
      return setCart((oldCart) => [...oldCart, { ...newProduct, quantity: quantity }]);
    }
    const updatedCart = cart.map(product => {
      if(product.id === newProduct.id) 
        product.quantity += quantity;
      return product;  
    })
    setCart(updatedCart);
  }

  useEffect(() => {
    const newTotal = cart.reduce(
      (counter, product) => (counter += product.price * product.quantity),
      0
    );
    setTotalToPay(newTotal);
    // setCart((oldCart) => oldCart.filter((product) => product.quantity > 0));
  }, [cart, setTotalToPay]);

  function openCartHandler() {
    setShowCart(!showCart);
  }

  //Updates the quantity att in the product object
  function updateQuantity(id, quantity) {
    let isTheLast = null;
    const updatedCart = cart.map((product) => {
      if (id === product.id) {
        product.quantity += quantity;
        // Check if the product is the last of its kind in the cart
        if(product.quantity < 1) {
          isTheLast = product.id;
        }
      }
      return product;
    });
    // Remove the product from the cart if it was the last one
    if(isTheLast) {
      return setCart(updatedCart.filter(product => product.id !== isTheLast));
    }
    return setCart(updatedCart);
  }

  function closeSnackBar() {
    setShowSnackBar(false);
  }

  return {
    quantity,
    addToCart,
    totalToPay,
    showCart,
    openCartHandler,
    cart,
    updateQuantity,
    showSnackBar,
    closeSnackBar
  };
};
