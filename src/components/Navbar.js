import  logo from "../image/logo.png"
import {useState} from "react";



export default function Navbar() {
    const [isHamActive, setIsHamActive] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                <img className="logo" src={logo} alt="logo"/>
            </a>
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
                        <a href="/home">Главная</a>
                    </li>
                    <li>
                        <a href="/products">Продукция</a>
                    </li>
                    <li>
                        <a href="/about">О нас</a>
                    </li>
                    <li>
                        <a href="/tools">Инструменты</a>
                    </li>
                    <li>
                        <a href="/contact">Контакты</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}