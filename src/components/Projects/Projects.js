import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import school from "../../Assets/Projects/java_fx_project.png";
import sihaty from "../../Assets/Projects/sihaty.png";
import jabak_lah from "../../Assets/Projects/jabak_lah.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School management application "
              description="Efficient school management project utilizing JavaFX for seamless administration of courses, programs, recruitment, and student management."
              ghLink="https://github.com/medXPS/School_management_project_with_javaFX"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sihaty}
              isBlog={false}
              title=" Online appointment booking application "
              description="A web-based application for online appointment booking, designed to streamline appointment management between patients and doctors.The project also employs React JS for the frontend and follow DevOps methodologies for streamlined development and deployment."
              ghLink="https://github.com/pfs2023/App_Reservation_Consultations"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jabak_lah}
              isBlog={false}
              title="Online Bill Payment and Product Delivery application "
              description="An Online Bill Payment and Product Delivery system is developed using Angular for the frontend, Spring Boot for the backend, and deployed in Google Kubernetes Engine (GKE). The project also includes efficient management of agents and clients."
              ghLink="https://github.com/E-BANKING-app-multiplatformes/jabak_lah_backend"
            
            />
          </Col>

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
