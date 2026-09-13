import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CheckoutPage from "../components/checkout/CheckoutPage";
import RestaurantSection from "../components/restaurant/RestaurantSection";

function PageLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] overflow-x-clip"><Outlet /></main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Navigate to="/restaurant/foodhive" replace />} />
        <Route path="/restaurant/foodhive" element={<RestaurantSection />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
