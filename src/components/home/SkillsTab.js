import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { color } from "framer-motion";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function SkillsSection({ skills, isScrolled }) {
  const simpleIcons = require('simple-icons');

  return (
    <>
      <Container>
        <Row className="justify-content-center gy-3">
          {skills.map((skill, index) => {
            try {
              // create a variable from a string
              const varName = 'si' + capitalizeFirstLetter(skill);
              const iconName = simpleIcons[varName].title;
              return (
                <Col xs={6} md={4} lg={2} className="text-center">
                  <Card key={`skill-card-${index}`}>
                    <Card.Img className="skillIcon mx-auto" src={`https://cdn.simpleicons.org/${skill}`} alt={iconName} />
                    <Card.Text className="badge bg-dark text-light">{iconName}</Card.Text>
                  </Card>
                </Col>
              )
            } catch (e) {
              console.log(e);
              const varName = capitalizeFirstLetter(skill);
              return (
                <Col xs={6} md={4} lg={2} className="text-center">
                  <Card key={`skill-card-${index}`}>
                    <div className="fawesome-icon">
                      <i className={`fa-brands fa-${skill} fa-4x text-dark`} style={{ color: '#000000' }}></i>
                      <img className="card-img-top mx-auto" src="..." alt={varName} />
                    </div>
                    <Card.Text className="badge bg-dark text-light">{varName}</Card.Text>
                  </Card>
                </Col>
              )
            }
          })}
        </Row>
      </Container>
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <SkillsSection
        skills={skills}
        isScrolled={isScrolled}
      />
    </>
  );
}

export default SkillsTab;
