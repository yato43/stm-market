import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faViber, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import  logo from "../image/logo.png"


export default function Footer() {
    return (
        <footer>
            <div className="copyright">© 2011-2022 ООО "СТМ-Маркет"</div>

            <div className="contacts-block">
                <ul className="contacts">
                    <li><a href="tel:+74993488384">+7 499 348-83-84</a></li>
                    <li><a href="mailto:stm-market@mail.ru">stm-market@mail.ru</a></li>
                </ul>
            </div>
            <div className="social-block">

                <a href="https://telegram.me/yato43"><FontAwesomeIcon icon={faPaperPlane} className="icon"/></a>
                <a href="https://wa.me/+74993488384"><FontAwesomeIcon icon={faWhatsapp} className="icon"/></a>
                <a href="viber://chat?number=%2B74993488384"><FontAwesomeIcon icon={faViber} className="icon"/></a>
                <a href="mailto:stm-market@mail.ru"><FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
            </div>
                <div  className="footerLogo">
                    <img src={logo} alt=""/>
                </div>
        </footer>
    )
}