import { Col, Container, Row} from "react-bootstrap";
import aboutLogo from "../image/Rectangle 13.png"
import Card from "../components/Card";
import mechanism from "../image/test_mech.png";

function About(){
    return(
        <Container>
            <h1>STM-MARKET</h1>
            <Row>
                <Col lg={{span:8, offset: 1}} md={{span:10, offset:1}} sm={{span:12, offset:0}}  xs={{span:12, offset:0}} className="justify-center">
                    <p className="about-text">Компания СТМ-Маркет представляет модельный ряд шлифовально-заточных станков с ЧПУ, предназначенных для изготовления и переточки концевого инструмента, червячных фрез и протяжек. Ассортимент продукции дополняют профилешлифовальные станки с ЧПУ: зубошлифовальные, шлицешлифовальные, резьбошлифовальные.  Комплексные пакеты и отдельные модули ПО обеспечивают оперативное решение производственных задач.
                        Чтобы получить более подробную информацию, обратитесь в компанию СТМ-Маркет!</p>
                </Col>
                <Col lg={{span:3, offset:0}} md={{span:10, offset: 1} } sm={{span:12, offset: 0} }  className="justify-center" >
                    <img src={aboutLogo} alt="" className="about-img"/>
                </Col>
            </Row>
            <Row>
                <h2>Наши Станки</h2>
            </Row>
            <Row className='justify-center'>
                <Col className="about-col justify-center"><Card image={mechanism} name='Полуавтомат шлифовально-заточный с ЧПУ 454-ой серии' link = '/t3000'/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
            </Row>

        </Container>
    )
}

 export default About