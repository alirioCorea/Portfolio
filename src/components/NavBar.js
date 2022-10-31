import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useState, useEffect} from "react";
import Logo from "../assets/img/Logo.png";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

const LINKS = [
    {href:"home", text:"Home"},
    {href:"skills", text:"Skills"},
    {href:"projects", text:"Projects"},
];

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Add scroll listener to change navbar color 
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {LINKS.map((link) => (
                <Nav.Link key={link.text} href={link.href} className={activeLink===link.href ? "active navbar-link" : "navbar-link"} onClick={()=>onUpdateActiveLink('home')}>{link.text}</Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://acortar.link/5fUEKx"><img src={NavIcon1} alt="social-networks"/></a>
                <a href="https://acortar.link/Upel6u"><img src={NavIcon2} alt="social-networks"/></a>
                <a href="https://acortar.link/pdQ9Si"><img src={NavIcon3} alt="social-networks"/></a>
            </div>
            <button className="vvd" onClick={()=>console.log("Conectando")}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
