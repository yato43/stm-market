import {Col, Row} from "react-bootstrap";
import pic from "../image/phone-page-img.png";


function Contacts() {
    return (
            <div className="container">

                <h1>Контактная информация</h1>
                <Row className='main-contact-row'>
                    <Col lg='7' md = {6} sm={8}>
                        <p className='main-contacts'><b>Контактные номера</b> <br/>
                            Общий (многоканальный)<a href="tel:+74993488384">+7 (499) 348-83-84</a> <br/>
                            Отдел продаж <a href="tel:+74993808405">+7 (499) 380-84-05</a> <br/>
                            Конструкторский отдел <a href="tel:+74993808552">+7 (499) 380-85-52</a> <br/>
                            Отдел закупок МВСП <a href="tel:+74993488636">+7 (499) 348-86-36 </a><br/>
                            Бухгалтерия <a href="tel:+78115365206">+7 (8115) 36-52-06</a> <br/>
                            Приемная <a href="tel:+78115365375">+7 (8115) 36-53-75</a> <br/>
                        </p>
                    </Col>
                    <Col lg={3} md={{span:3, offset: 0}} className="image">
                        <img src={pic} alt=""/>
                    </Col>
                </Row>
                <h2>Контакты по локализации</h2>
                <Row className='contact-row'>
                    <div className="contactCard">
                        <h3>Москва</h3>
                        <p>
                            Адрес: РФ, Москва, 1-й Институтский пр-д, 5с 1 <br/>
                            Тел.: <a href="tel:+74993488384">+7 (499) 348-83-84</a> <br/>
                            E-mail: <a href="mailto:stm-market@mail.ru">stm-market@mail.ru</a> <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>
                    <div className="contactCard">
                        <h3>Великие Луки</h3>
                        <p>
                            Адрес: РФ, Великие Луки, пр-т.Октябрьский, 125 <br/>
                            Тел.: <a href="tel:+78115365206">+7 (8115) 36-52-06</a> <br/>
                            Тел.: <a href="tel:+78115365375">+7 (8115) 36-53-75</a> <br/>
                            E-mail: <a href="mailto:stm-market@mail.ru">stm-market@mail.ru</a> <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>
                    <div className="contactCard">
                        <h3>Витебск</h3>
                        <p>
                            Адрес: РБ, Витебск, пр-т.Черняховского, 33, пом. 6 <br/>
                            Тел.: <a href="tel:+375249270027">+375 (249) 27-00-27</a> <br/>
                            Тел.: <a href="tel:+375212679656"> +375 (212) 67-96-56</a> <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>

                </Row>
            </div>

    );
}

export default Contacts
