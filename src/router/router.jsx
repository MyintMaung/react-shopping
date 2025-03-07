import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "about-us",
        element: <AboutUs/>
    },

    {
        path:"my-cart",
        element: <MyCart/>
    },

    {
        path:"product-detail",
        element: <ProductDetail/>
    }
])

export default router