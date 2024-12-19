import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";




export default function Routing() {
    return (
        <Router basename="">
            <Routes>
                <Route path="/" element={<Home />}> 
                    {/* Dashboard */}
                    <Route path="" element={ <Home />}></Route>
                </Route>
            </Routes>
        </Router>
    )
}