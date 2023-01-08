import  logo from "../image/logo.png"
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";




export default function Navbar() {
    let activeStyle = {

        color: "#a6a6a6"
    };

    const [isHamActive, setIsHamActive] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <p className="brand-word">Точный инструмент  +  Качественная продукция = Успех бизнеса</p>
            <Link to="/" className="brand-name" onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}>
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
                        } onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}  >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}>Продукция</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tools" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}>Инструменты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } onClick={() => {setIsHamActive(!isHamActive); setIsNavExpanded(!isNavExpanded)}}>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}