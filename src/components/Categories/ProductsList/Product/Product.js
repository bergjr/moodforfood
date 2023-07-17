import React from "react";
import ReactDOM from "react-dom";
import { useProductContext } from "common/context/ProductContext";
import { useCartContext } from "common/context/CartContext";
// import Backdrop from "UI/Backdrop/Backdrop";
import ModalOverlayProduct from "./ModalOverlayProduct";
import { Backdrop } from "@mui/material";

const Product = () => {
  const {
    showProductModal,
    selectedProduct,
    closeModal,
    quantity,
    changeQuantity,
  } = useProductContext();
  const { addToCart } = useCartContext();
  return (
    <>
      <Backdrop
        open={showProductModal}
        sx={{ zIndex: "99999" }}
        transitionDuration={500}
        onClick={closeModal}
      >
        {selectedProduct && (
          <ModalOverlayProduct
            onAdd={addToCart}
            onChange={changeQuantity}
            quantity={quantity}
            product={selectedProduct}
          />
        )}
      </Backdrop>
    </>
  );
};

export default Product;
