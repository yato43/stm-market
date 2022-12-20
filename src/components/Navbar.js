import "../styles/navbar.scss"
import {useState} from "react";

export default function Navbar() {
    const [isHamActive, setIsHamActive] = useState(false)
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                MacroSoft
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
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}