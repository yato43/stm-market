import { Col, Container, Row} from "react-bootstrap";
import aboutLogo from "../image/Rectangle 13.png"
import Card from "../components/Card";

function About(){
    return(
        <Container>
            <h1>STM-MARKET</h1>
            <Row>
                <Col lg={{span:8, offset: 0}} md={{span:8, offset:2}} sm={{span:8, offset:2}}  xs={{span:8, offset:2}}  className="justify-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                </Col>
                <Col lg={{span:4, offset:0}} md={{span:6, offset: 3} } sm={{span:6, offset: 3} }  className="justify-center" >
                    <img src={aboutLogo} alt="" className="about-img"/>
                </Col>
            </Row>
            <Row>
                <h2>Наши Станки</h2>
            </Row>
            <Row className='justify-center'>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
                <Col className="about-col justify-center"><Card/></Col>
            </Row>

        </Container>
    )
}

 export default About