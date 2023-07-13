import { ProductProvider } from "common/context/ProductContext";
import Header from "components/Header/Header";
import MainPage from "pages/MainPage/MainPage";
import CategoriesPage from "pages/CategoriesPage/CategoriesPage";
import StandardPage from "pages/StandardPage/StandardPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "styles/styles.scss";
import { CartProvider } from "common/context/CartContext";
import { PaymentProvider } from "common/context/PaymentContext";

function RoutesApp() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Header />
          <PaymentProvider>
          <Routes>
            <Route path="/" element={<StandardPage />}>
              <Route index element={<MainPage />} />
              <Route path="/categories/:name" element={<CategoriesPage />} />
              <Route
                path="/categories/:name/product/:idProduct"
                element={<MainPage />}
              />
            </Route>
          </Routes>
          </PaymentProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
