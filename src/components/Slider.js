import first from '../image/sliderImg/first.jpg'
import second from '../image/sliderImg/second.jpg'
import third from '../image/sliderImg/third.jpg'


import {Button, Carousel} from "react-bootstrap";


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
                        <Button className="slider-btn">Перейти</Button>
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
                        <Button className="slider-btn">Перейти</Button>
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
                        <Button className="slider-btn">Перейти</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}