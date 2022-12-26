import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faViber, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'


export default function Footer() {
    return (
        <footer>
            <div className="copyright">© 2011-2022 ООО "СТМ-Маркет"</div>
            <div className="social-block">
                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                <FontAwesomeIcon icon={faWhatsapp} className="icon"/>
                <FontAwesomeIcon icon={faViber} className="icon"/>
                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            </div>
            <div className="contacts-block">
                <ul className="contacts">
                    <li>+7 499 348-83-84</li>
                    <li>stm-market@mail.ru</li>
                </ul>
            </div>
        </footer>
    )
}