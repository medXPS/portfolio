import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Ammaha</span> from <span className="purple">Ait Ourir, Morocco</span>.
            <br /> I am a 4th-year student at ENSA Marrakech, specializing in computer science with a keen interest in DevOps.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              - Playing Games
            </li>
            <li className="about-activity">
              - Reading Mangas
            </li>
            <li className="about-activity">
              - Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Success is not a matter of luck; it is the result of hard work and dedication. Every achievement requires effort and perseverance."
          </p>
          <footer className="blockquote-footer">'Mohamed'</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
