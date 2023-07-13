import { createContext, useContext, useEffect, useState } from "react";
import { useCartContext } from "./CartContext";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [totalToPay, setTotalToPay] = useState(0);
  return (
    <PaymentContext.Provider
      value={{
        totalToPay,
        setTotalToPay,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const { totalToPay, setTotalToPay } = useContext(PaymentContext);
  const { cart } = useCartContext();

  useEffect(() => {
    const newTotal = cart.reduce(
      (counter, product) => counter += (product.quantity * product.quantity), 0);
      setTotalToPay(newTotal);
  }, [cart, setTotalToPay]);

  return {
    totalToPay,
    setTotalToPay,
  };
};
