import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";


function App() {
    return (


    <div className='window'>

        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

        <Footer/>

    </div>

    );
}

export default App;
