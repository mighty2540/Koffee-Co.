import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return(
    <BrowserRouter basename="/Koffee-Co./"> 
      <Routes>
        <Route element={<DashboardLayout />}>
         <Route path="/" element={<DashboardPage />} />
         <Route path="/products" element={<ProductsPage />} />
         <Route path="/add-product" element={<AddProductPage />} />
         <Route path="/analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
