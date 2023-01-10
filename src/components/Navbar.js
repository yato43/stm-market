import  logo from "../image/logo.png"
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";




export default function Navbar() {
    let activeStyle = {
        color: "#BBDEFB"
    };
    let userScreen = document.documentElement.clientWidth;
    console.log(userScreen)

    function open(){
        if(userScreen < 876){
            setIsHamActive(!isHamActive);
            setIsNavExpanded(!isNavExpanded)
        }
    }

    const [isHamActive, setIsHamActive] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <p className="brand-word">Точный инструмент  +  Качественная продукция = Успех бизнеса</p>
            <Link to="/" className="brand-name" onClick={() => {open()}}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <button className="hamburger"  onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                <i
                    style={{ background: "transparent", border: "none" }}
                    id="nav-toggle"
                    className={isHamActive ? "active" : null}
                    onClick={() => setIsHamActive(!isHamActive)}
                >
                    <span />
                    <span />
                </i>
            </button>
            <div
                className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {open()}}  >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {open()}}>Продукция</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {open()}}>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tools" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {open()}}>Инструменты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {open()}}>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}