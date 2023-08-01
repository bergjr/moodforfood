import React from 'react';
import styles from './ModalOverlayProduct.module.scss';
import { Button, IconButton } from '@mui/material';
import {RemoveCircle, AddCircle, Cancel} from '@mui/icons-material';

const ModalOverlayProduct = ({
    product = {},
    onChange,
    quantity,
    onAdd,
    onShow,
    closeModal
  }) => {
    const img = product.photo ? require(`assets/categories/${product.photo}`) : "";
  
    return (
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles["modal-container"]}>
          <IconButton className={styles['close-button']} onClick={closeModal}>
            <Cancel fontSize='large'/>
          </IconButton>
          <div className={styles["img-container"]}>
            <img src={img} alt={product?.name} />
          </div>
          <div className={styles["text-container"]}>
            <h2>{product?.name}</h2>
            <p className={styles.description}>{product?.description}</p>
            <h3>€ {product?.price}</h3>
          </div>
        </div>
        '
        <div className={styles["buttons-container"]}>
          <div className={styles["box-buttons"]}>
            <IconButton onClick={() => onChange(1)}>
              <AddCircle className={styles.green} />
            </IconButton>
            <p>{quantity}</p>
            <IconButton disabled={quantity === 1} onClick={() => onChange(-1)}>
              <RemoveCircle color="red"
              />
            </IconButton>
          </div>
          <Button disabled={quantity <= 0} className={styles['add-cart']} variant="contained" onClick={() => onAdd(product)}>
            Add to Cart € {(quantity * product.price).toFixed(2)}
          </Button>
        </div>
      </div>
    );
  };

  export default ModalOverlayProduct;