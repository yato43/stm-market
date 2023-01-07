import {Col, Row} from "react-bootstrap";
import pic from "../image/phone-page-img.png";


function Contacts() {
    return (
            <div className="container">

                <h1>Контактная информация</h1>
                <Row className='main-contact-row'>
                    <Col lg='auto' md = {6}>
                        <p className='main-contacts'>Контактные номера <br/>
                            Общий (многоканальный) +7 (499) 348-83-84 <br/>
                            Отдел продаж+7 (499) 380-84-05 <br/>
                            Конструкторский отдел <a href="tel:+74993808552">+7 (499) 380-85-52</a> <br/>
                            Отдел закупок МВСП +7 (499) 348-86-36 <br/>
                            Бухгалтерия+7 (8115) 36-52-06 <br/>
                            Приемная+7 (8115) 36-53-75 <br/>
                        </p>
                    </Col>
                    <Col md={3} className="image">
                        <img src={pic} alt=""/>
                    </Col>
                </Row>
                <h2>Контакты по локализации</h2>
                <Row className='contact-row'>
                    <div className="contactCard">
                        <h3>Москва</h3>
                        <p>
                            Адрес: РФ, Москва, 1-й Институтский пр-д, 5с 1 <br/>
                            Тел.: +7 (499) 348-83-84 <br/>
                            E-mail: stm-market@mail.ru <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>
                    <div className="contactCard">
                        <h3>Великие Луки</h3>
                        <p>
                            Адрес: РФ, Великие Луки, пр-т.Октябрьский, 125 <br/>
                            Тел.: +7 (8115) 36-52-06 <br/>
                            Тел.: +7 (8115) 36-53-75 <br/>
                            E-mail: stm-market@mail.ru <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>
                    <div className="contactCard">
                        <h3>Витебск</h3>
                        <p>
                            Адрес: РБ, Витебск, пр-т.Черняховского, 33, пом. 6 <br/>
                            Тел.: +375 (249) 27-00-27 <br/>
                            Тел.: +375 (212) 67-96-56 <br/>
                            Время работы: 9.00 - 18.00
                        </p>
                    </div>

                </Row>
            </div>

    );
}

export default Contacts
