import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGithub,
  SiJetbrains,
  SiJira,
  SiPostman,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  return (
    <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
  
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJetbrains />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecloud />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
