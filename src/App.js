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
import P780 from "./pages/products/p780";
import P721 from "./pages/products/p721";
import P676 from "./pages/products/p676";
import P681 from "./pages/products/p681";
import P818 from "./pages/products/p818";
import P3E692 from "./pages/products/p3E692";
import P400 from "./pages/products/p400";
import EndTools from "./pages/tools/EndTools";
import RollingMachines from "./pages/tools/RollingMachines";




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
            <Route path="/p780" element={<P780/>}/>
            <Route path="/p721" element={<P721/>}/>
            <Route path="/p676" element={<P676/>}/>
            <Route path="/p681" element={<P681/>}/>
            <Route path="/p818" element={<P818/>}/>
            <Route path="/p3Е692" element={<P3E692/>}/>
            <Route path="/p400" element={<P400/>}/>
            <Route path="/endTools" element={<EndTools/>}/>
            <Route path="/rollingMachines" element={<RollingMachines/>}/>
        </Routes>

        <Footer/>

    </div>

    );
}

export default App;
