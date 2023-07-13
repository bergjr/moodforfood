import React from "react";
import ReactDOM from "react-dom";
import styles from "./Product.module.scss";
import { useProductContext } from "common/context/ProductContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useCartContext } from "common/context/CartContext";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={() => onClose()}></div>;
};

const ModalOverlay = ({ product, onChange, quantity, onAdd }) => {
  const img = require(`assets/categories/${product.photo}`);
  return (
    <div className={styles.modal}>
      <div className={styles["modal-container"]}>
        <div className={styles["img-container"]}>
          <img src={img} alt={product.name} />
        </div>
        <div className={styles["text-container"]}>
          <h2>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <h3>€ {product.price}</h3>
        </div>
      </div>
      '
      <div className={styles["buttons-container"]}>
        <div className={styles['box-buttons']}>
          <button onClick={() => onChange(1)}>
            <AiFillPlusCircle className={styles.green} />
          </button>
          <p>{quantity}</p>
          <button onClick={() => onChange(-1)} disabled={quantity <= 0}>
            <AiFillMinusCircle className={styles.red} color={quantity <=0 ? "gray" : ""} />
          </button>
        </div>
        <button className={styles['add-cart']} onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Product = () => {
  const { showProductModal, selectedProduct, closeModal } = useProductContext();
  const { quantity, changeQuantity, addToCart } = useCartContext();
  return (
    <>
      {showProductModal &&
        ReactDOM.createPortal(
          <Backdrop onClose={closeModal} />,
          document.getElementById("backdrop-root")
        )}
      {showProductModal &&
        ReactDOM.createPortal(
          <ModalOverlay
            onAdd={addToCart}
            onChange={changeQuantity}
            quantity={quantity}
            product={selectedProduct}
          />,
          document.getElementById("overlay-root")
        )}
    </>
  );
};

export default Product;
