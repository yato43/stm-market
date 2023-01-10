import first from '../image/sliderImg/first.jpg'
import second from '../image/sliderImg/second.jpg'
import third from '../image/sliderImg/third.jpg'


import {Button, Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Slider() {
    return (
        <div className="slider">
            <Carousel fade interval={2000}>
                <Carousel.Item>
                    <div style={{
                        backgroundImage: 'url(' + first + ')',
                        width: "100%",
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}/>
                    <Carousel.Caption>
                        <Link to="/p454"> <Button className="slider-btn">Перейти</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{
                        backgroundImage: 'url(' + second + ')',
                        width: "100%",
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}/>

                    <Carousel.Caption>
                        <Link to="/products"> <Button className="slider-btn">Перейти</Button></Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{
                        backgroundImage: 'url(' + third + ')',
                        width: "100%",
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}/>

                    <Carousel.Caption>
                        <Link to="/endTools"> <Button className="slider-btn">Перейти</Button></Link>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}