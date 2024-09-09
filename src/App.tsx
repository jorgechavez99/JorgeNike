import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import { SnackbarProvider } from "notistack";
import { UserContextProvider } from './context/user-context'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <UserContextProvider>
        <SnackbarProvider>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </SnackbarProvider>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}
