import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} className="footer-img" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/harshbali1519"><FaLinkedin className="navicon1"/></a>
                <a href="https://leetcode.com/Harsh2429/"><SiLeetcode className="navicon2"/></a>
                <a href="https://github.com/Harsh72019"><FaGithub className="navicon3"/></a>
            </div>
            <p>Copyright &copy; 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
