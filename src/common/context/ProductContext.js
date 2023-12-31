import { createContext, useContext, useState } from "react";
import categories from "components/Categories/jsonfile.json";

export const ProductContext = createContext();
ProductContext.displayName = "Product";

export const ProductProvider = ({ children }) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [productsList, setProductsList] = useState(categories[0].products);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductContext.Provider
      value={{
        categories,
        productsList,
        setProductsList,
        showProductModal,
        setShowProductModal,
        selectedProduct,
        setSelectedProduct,
        quantity,
        setQuantity
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
    setSelectedProduct,
    quantity,
    setQuantity
  } = useContext(ProductContext);

  function updateProducts(id) {
    if (id) {
      const [newProducts] = categories.filter(
        (category) => category.id === Number(id)
      );
      return setProductsList(newProducts.products);
    }
    else {
      return;
    }
  }

  function selectProduct(product) {
    setShowProductModal(!showProductModal);
    setSelectedProduct(product);
  }

  function changeQuantity(newQuantity) {
    setQuantity((oldQuantity) => (oldQuantity += newQuantity));
  }

  function closeModal() {
    setShowProductModal(false);
    setQuantity(1);
  }

  return {
    categories,
    productsList,
    updateProducts,
    showProductModal,
    selectProduct,
    selectedProduct,
    closeModal,
    quantity,
    changeQuantity
  };
};
