import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ProductList from "./components/pages/Products/ProductList";
import Cart from "./components/pages/Cart/Cart";
import ScrollToTop from "./helpers/scrollTop";
import CheckoutPage from "./components/pages/Checkout/Checkout";
import ThankYouPage from "./components/pages/Checkout/ThankYou";
import AboutUs from "./components/pages/AboutUs/Aboutus";

export default function Routing() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />}> 
                    {/* Dashboard */}
                    {/* <Route path="" element={ <Home />}></Route> */}
                    
                </Route>
                <Route path="products" element={ <ProductList />}></Route>
                <Route path="cart" element={ <Cart />}></Route>
                <Route path="checkout" element={ <CheckoutPage />}></Route>
                <Route path="thankyou" element={ <ThankYouPage />}></Route>
                <Route path="aboutus" element={ <AboutUs />}></Route>
            </Routes>
        </Router>
    )
}