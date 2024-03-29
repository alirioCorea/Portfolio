import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logos from "../lib/logos";
import colorSharp from "../assets/img/color-sharp3.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 150},
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2 className="title">My Tech Stack</h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'  autoPlaySpeed={2000} autoPlay={true}>
                        {
                            logos.map((logo, index) => (
                                <div key={index} className="skill-item">
                                    <img src={logo.logo} alt="Icon-tech"/>
                                    <h5>{logo.name}</h5>
                                </div>
                            ))
                        }
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="background-skills"/>
    </section>
  )
}
