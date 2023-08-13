import ProductsList from 'components/Categories/ProductsList/ProductsList';
import React, { useEffect } from 'react';
import styles from './CategoriesPage.module.scss';
import Product from 'components/Categories/ProductsList/Product/Product';
import CategoriesList from 'components/Categories/CategoriesList';
import { useParams } from 'react-router-dom';
import TextBox from 'components/TextBox/TextBox';


const ProductsPage = () => {

    const categorySelected = useParams();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return (
        <main id="main" className={styles.main}>
            <TextBox title="Our Menu"/>
            <CategoriesList />
            <ProductsList category={categorySelected ? categorySelected : 1}/>
            <Product />
        </main>
    );
}

export default ProductsPage;
