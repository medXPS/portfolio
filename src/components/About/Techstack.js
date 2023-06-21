import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDocker,
  DiJenkins,
  DiLinux,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiKubernetes, SiTerraform, SiSonarqube, SiAnsible } from "react-icons/si";
import { GrUbuntu } from "react-icons/gr";

import { SiLaravel } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
    </Row>
  );
}

export default Techstack;
