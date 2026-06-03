import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import VisitorLayout from "./layouts/VisitorLayout";

import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ================= VISITOR LAYOUT ================= */}
        <Route element={<VisitorLayout />}>
          <Route path="/visitor" element={<LandingPage />} />
        </Route>

        {/* ================= MAIN LAYOUT ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
        </Route>

        {/* ================= AUTH LAYOUT ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ================= NOT FOUND ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;