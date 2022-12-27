import Navbar from "./components/Navbar"
// import Slider from "./components/Slider";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";



function App() {
    return (
        <div className='window'>
            <Navbar />
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
</Routes>

            <Footer/>
        </div>
    );
}

export default App;
