import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { TypeAnimation } from 'react-type-animation';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ heading, content }) => {
  return (
    <section className="section" id="experience">
      <Jumbotron fluid className="m-0 bg-dark bg-gradient">
        <Container className="p-5 text-light">
          <h2 className="display-4 mb-5 text-center" style={{ color: '#62E884' }}>
            <TypeAnimation cursor={true} sequence={[heading, 3000, '']} repeat={Infinity} />
          </h2>
          <Row>
            {
              content.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default Experience;