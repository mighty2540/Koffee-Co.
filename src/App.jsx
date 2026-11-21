import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return(
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/add-product" element={<AddProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
