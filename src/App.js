import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CustomModal from "./components/CustomModal/CustomModal";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignIn/SignUp";
import AddItem from "./pages/AddItem/AddItem";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import ViewMore from "./pages/ViewMore/ViewMore";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Category from "./pages/Category/Category";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modal" element={<CustomModal />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/add-item" element={<AddItem />} />

            <Route path="/item/:itemId" element={<ItemDetails />} />
            <Route path="/ViewMore" element={<ViewMore />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/category" element={<Category />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SkeletonTheme>
      <ToastContainer className="toast-position" position="bottom-right" />
    </div>
  );
}

export default App;
