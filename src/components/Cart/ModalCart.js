import React from "react";
import styles from "./ModalCart.module.scss";
import { useCartContext } from "common/context/CartContext";
import { IconButton } from "@mui/material";
import AddCircle from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const ModalCart = () => {
  const { cart, totalToPay, openCartHandler, updateQuantity } = useCartContext();
  return (
    <div className={styles.cart} onClick={e => e.stopPropagation()}>
      <div className={styles["box-top"]}>
        <h2>Your Shopping Cart ({cart?.length || 0})</h2>
        <IconButton aria-label="add" onClick={openCartHandler}>
          <CloseIcon sx={{color: "#000000"}}/>
        </IconButton>
      </div>
      <ul className={styles["box-list"]}>
        {cart.map((product) => {
          let img = require(`assets/categories/${product.photo}`);
          return (
            <li>
              <div className={styles["img-container"]}>
                <img src={img} alt={product.name} />
              </div>
              <div className={styles["info-container"]}>
                <h3>{product.name}</h3>
                <p className={styles.price}>
                  € {product.quantity * product.price}
                </p>
                <div className={styles["buttons-container"]}>
                  <IconButton aria-label="add" onClick={() => updateQuantity(product.id, 1)}>
                    <AddCircle color="success" />
                  </IconButton>
                  <p>{product.quantity}</p>
                  <IconButton aria-label="remove" onClick={() => updateQuantity(product.id, -1)}>
                    <RemoveIcon sx={{color: "red"}} />
                  </IconButton>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles['box-bottom']}>
        <h2>Total: € {totalToPay}</h2>
        {/* <button>Checkout</button> */}
      </div>
    </div>
  );
};

export default ModalCart;
