import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ProductList from "./components/pages/Products/ProductList";
import ProductDetail from "./components/pages/Products/ProductDetail";
import Cart from "./components/pages/Cart/Cart";
import ScrollToTop from "./helpers/scrollTop";




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
                <Route path="product/:id" element={ <ProductDetail />}></Route>
                <Route path="cart" element={ <Cart />}></Route>
            </Routes>
        </Router>
    )
}