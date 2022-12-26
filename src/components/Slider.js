import {Button, Carousel} from "react-bootstrap";

export default function Slider() {
    return(
        <Carousel fade interval={1000}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={require('./first.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={require('./first.jpg')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Button className="alert-primary"></Button>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={require('./first.jpg')}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}