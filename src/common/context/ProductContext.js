import { createContext, useContext, useState } from "react";
import categories from "components/Categories/jsonfile.json";

export const ProductContext = createContext();
ProductContext.displayName = "Product"

export const ProductProvider = ({ children }) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({})

  return (
    <ProductContext.Provider
      value={{
        categories,
        productsList,
        setProductsList,
        showProductModal,
        setShowProductModal,
        selectedProduct,
        setSelectedProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
   
   const { 
      categories, 
      productsList,
      setProductsList,
      showProductModal,
      setShowProductModal,
      selectedProduct,
      setSelectedProduct 
    } 
    = useContext(ProductContext);

  function updateProducts(name) {
    const [newProducts] = categories.filter(
      (category) => category.name === name
    );
    return setProductsList(newProducts.products);
  }

  function selectProduct(product) {
    setShowProductModal(!showProductModal);
    setSelectedProduct(product);
  }

  function closeModal() {
    setShowProductModal(false);
  }

  return {
    categories,
    productsList,
    updateProducts,
    showProductModal,
    selectProduct,
    selectedProduct,
    closeModal
  };
};
