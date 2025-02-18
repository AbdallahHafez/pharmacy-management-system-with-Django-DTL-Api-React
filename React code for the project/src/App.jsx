import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Customers from "./components/customers/Customers";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import CreateCustomer from "./components/customers/CreateCustomer";
import CustomerProfile from "./components/profile/CustomerProfile";
import CustomerUpdate from "./components/profile/CustomerUpdate";
import CustomerDelete from "./components/profile/CustomerDelete";
import Products from "./components/products/Products";
import CreateProduct from "./components/products/CreateProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import DeleteProduct from "./components/products/DeleteProduct";
import CreateOrderItem from "./components/products/CreateOrderItem";
import Order from "./components/home/Order";
import SingleOrder from './components/order/Order'


const App = ()=>{
    return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customers" element={<Customers/>} />
            <Route path="/create-customer" element={<CreateCustomer/>} />
            <Route path="/profile/:id" element={<CustomerProfile/>} />
            <Route path="/profile-update/:id" element={<CustomerUpdate/>} />
            <Route path="/profile-delete/:id" element={<CustomerDelete/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/product-create" element={<CreateProduct/>} />
            <Route path="/product-update/:id" element={<UpdateProduct/>} />
            <Route path="/product-delete/:id" element={<DeleteProduct/>} />
            <Route path="/orderitem-create/:id" element={<CreateOrderItem/>} />
            <Route path="/order/:id" element={<SingleOrder/>} />
          </Routes>
        </BrowserRouter>
    )
}

export default App