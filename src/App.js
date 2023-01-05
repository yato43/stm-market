import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";


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
        </Routes>

        <Footer/>

    </div>

    );
}

export default App;
