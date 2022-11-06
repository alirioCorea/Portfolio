import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";

export default function Contact() {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [status, setStatus] = useState({});
    const [buttonText, setButtonText] = useState("Send Message");

    const onFormUpdate = (category, value) => {
        setFormDetails({ ...formDetails, [category]: value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={ContactImg} alt="Contact"/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={onFormSubmit}>
                        <Row>
                            <Col sm={6} className={"px-1"}>
                                <input type="text" name="firstName" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                            </Col>
                            <Col sm={6} className={"px-1"}>
                                <input type="text" name="lastName" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                            </Col>
                            <Col sm={6} className={"px-1"}>
                                <input type="email" name="email" placeholder="Email" value={formDetails.email} onChange={(e) => onFormUpdate("email", e.target.value)}/>
                            </Col>
                            <Col sm={6} className={"px-1"}>
                                <input type="tel" name="phone" placeholder="Phone Numer" value={formDetails.phone} onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                            </Col>
                            <Col>
                                <textarea row={6} name="message" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                                <button type="submit" className="btn btn-primary"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.msg && (
                                    <Col>   
                                        <p className={status.success===false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                )
                            }
                        </Row>
                    </form>
                </Col>                    
            </Row>
        </Container>
    </section>
  )
}
