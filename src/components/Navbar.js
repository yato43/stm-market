import  logo from "../image/logo.png"
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";



export default function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
    };

    const [isHamActive, setIsHamActive] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <p className="brand-word">Точный инструмент  +  Качественная продукция = Успех бизнеса</p>
            <Link to="/" className="brand-name" >
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
                        }>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Продукция</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tools" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Инструменты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}