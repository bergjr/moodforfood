import { Link, useParams } from "react-router-dom";
import styles from "./ProductsList.module.scss";
import { useProductContext } from "common/context/ProductContext";
import { memo, useEffect } from "react";

const ProductsList = () => {
  const { productsList = [], updateProducts, selectProduct} = useProductContext();
  const { name } = useParams();

  useEffect(() => {
    updateProducts(name);
  }, [name]);

  return (
    <section id="products" className={styles.products}>
      <ul className={styles["products-container"]}>
        {productsList.map((product) => {
          let photo = require(`assets/categories/${product.photo}`);
          return (
            <li key={product.id} onClick={() => selectProduct(product)}>
                <img src={photo} alt={product.name} />
                <div className={styles.info}>
                  <h2>{product.name}</h2>
                  <p>€ {product.price}</p>
                </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default memo(ProductsList);
