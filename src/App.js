import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';
import Enquaries from './pages/Enquaries';
import BlogList from './pages/BlogList';
import AddBlog from './pages/AddBlog';
import BlogCatagoryList from './pages/BlogCatagoryList';
import Order from './pages/Order';
import Customers from './pages/Customers';
import ProductList from './pages/ProductList';
import BrandList from './pages/BrandList';
import CatagoryList from './pages/CatagoryList';
import ColorList from './pages/ColorList';
import AddBlogCatagory from './pages/AddBlogCatagory';
import AddColor from './pages/AddColor';
import AddCatagory from './pages/AddCatagory';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';
import CouponList from './pages/CouponList';
import AddCoupon from './pages/AddCoupon';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={< ForgetPassword/>} />
        <Route path="/admin" element={< MainLayout/>}>
          <Route index element={< Dashboard/>} />
          <Route path="customers" element={< Customers/>} />
          <Route path="orders" element={< Order/>} />
          <Route path="enquiries" element={< Enquaries/>} />
          <Route path="product" element={< AddProduct/>} />
          <Route path="product/:id" element={< AddProduct/>} />
          <Route path="product-list" element={< ProductList/>} />
          <Route path="brand" element={< AddBrand/>} />
          <Route path="brand/:id" element={< AddBrand/>} />
          <Route path="brand-list" element={< BrandList/>} />
          <Route path="category" element={< AddCatagory/>} />
          <Route path="category/:id" element={< AddCatagory/>} />
          <Route path="category-list" element={< CatagoryList/>} />
          <Route path="color" element={< AddColor/>} />
          <Route path="color/:id" element={<AddColor />} />
          <Route path="color-list" element={< ColorList/>} />
          <Route path="blog" element={< AddBlog/>} />
          <Route path="blog/:id" element={< AddBlog/>} />
          <Route path="blog-list" element={< BlogList/>} />
          <Route path="coupon" element={< AddCoupon/>} />
          <Route path="coupon-list" element={< CouponList/>} />
          <Route path="blog-category" element={< AddBlogCatagory/>} />
          <Route path="blog-category-list" element={< BlogCatagoryList/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
