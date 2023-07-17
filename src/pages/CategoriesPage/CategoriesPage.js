import ProductsList from 'components/Categories/ProductsList/ProductsList';
import React from 'react';
import styles from './CategoriesPage.module.scss';
import Product from 'components/Categories/ProductsList/Product/Product';


const ProductsPage = () => {
    
    return (
        <main id="main" className={styles.main}>
            <ProductsList />
            <Product />
        </main>
    );
}

export default ProductsPage;
