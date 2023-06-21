import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Hey there! I'm passionate about DevOps and automation, and I love building scalable and efficient systems.
    <br />
    <br />
    With a solid foundation in programming, I've honed my skills in languages like
    <i>
      <b className="purple"> Python, Java, and Php.</b>
    </i>
    <br />
    <br />
    My expertise lies in deploying and managing cloud infrastructure using tools such as
    <i>
      <b className="purple"> AWS, Terraform, and Ansible.</b>
    </i>
    <br />
    <br />
    I enjoy automating repetitive tasks to boost productivity and streamline workflows. Whether it's setting up CI/CD pipelines or configuring monitoring systems, I thrive in the world of automation.
    <br />
    <br />
    When it comes to web development, I leverage the power of <b className="purple">Java(Spring boot) </b> and
    <i>
      <b className="purple"> Php (Laravel) </b>
    </i>
    &nbsp; to build robust and dynamic web applications.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on </h1>
      
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/medXPS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohamed-ammaha-788908246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohamed_am362/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
