import { Col, Container, Row} from "react-bootstrap";
import aboutLogo from "../image/Rectangle 13.png"
import Card from "../components/Card";
import p454 from "../image/products/454.jpg";
import p531 from "../image/products/531.jpg";
import p780 from "../image/products/780.jpg";
import p721 from "../image/products/721.jpg";

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
                <Col className="about-col justify-center"><Card image={p454} name='Полуавтомат шлифовально-заточный с ЧПУ 454-ой серии' link = '/p454'/></Col>
                <Col className="about-col justify-center"><Card image={p531} name='Заточной станок с ЧПУ для концевого инструмента 531-й серии' link = '/p531'/></Col>
                <Col className="about-col justify-center"> <Card image={p780} name='Станок для заточки протяжек 780-ой серии' link = '/p780'/></Col>
                <Col className="about-col justify-center"><Card image={p721} name='Станок для заточки червячных фрез 721-ой серии' link = '/p721'/></Col>
            </Row>




        </Container>
    )
}

 export default About