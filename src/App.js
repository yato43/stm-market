import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";
import P454 from "./pages/products/p454";
import P531 from "./pages/products/p531";


function App() {
    return (


    <div className='window'>

        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/tools" element={<Tools/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/p454" element={<P454/>}/>
            <Route path="/p531" element={<P531/>}/>
        </Routes>

        <Footer/>

    </div>

    );
}

export default App;
