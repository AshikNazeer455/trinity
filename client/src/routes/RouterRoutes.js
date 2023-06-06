import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import Doors from '../pages/Doors';
import Pdoors from '../pages/Pdoors';
import Cdoors from '../pages/Cdoors';
import Edoors from '../pages/Edoors';
import Cadoors from '../pages/Cadoors';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';
import Dash from '../pages/Dash';
import Beds from '../pages/Beds';
import Users from '../pages/Users';
import Product from '../pages/Product';
import Products from '../pages/Products';
import Update from '../pages/Update';
const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/Doors" element={<Doors/>} />
                <Route path="/Pdoors" element={<Pdoors/>} />
                <Route path="/Cdoors" element={<Cdoors/>} />
                <Route path="/Edoors" element={<Edoors/>} />
                <Route path="/Cadoors" element={<Cadoors/>} />
                <Route path="/Profile" element={<Profile/>} />
                <Route path="/Payment" element={<Payment/>} />
                <Route path="/Dash" element={<Dash/>} />
                <Route path="/Beds" element={<Beds/>} />
                <Route path="/Users" element={<Users/>} />
                 <Route path="/product" element={<Product/>} />
                <Route path="/products" element={<Products/>} />
                 <Route path="/Update" element={<Update/>} />
            </Routes>
        </>
    );
};

export default RouterRoutes;