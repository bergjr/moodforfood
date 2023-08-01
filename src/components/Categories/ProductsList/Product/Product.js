import React from "react";
import { useProductContext } from "common/context/ProductContext";
import { useCartContext } from "common/context/CartContext";
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
            closeModal={closeModal}
          />
        )}
      </Backdrop>
    </>
  );
};

export default Product;
