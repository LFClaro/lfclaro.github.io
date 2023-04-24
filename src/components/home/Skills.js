import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab.js";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, skillList }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  // Populating the Skills tabs
  const list = [];
  for (let i in skillList) {
    list.push(
      <Tab
        tabClassName="skills-tab lead"
        eventKey={i}
        title={i}
      >
        <Row className="pt-3 px-1">
          <SkillsTab skills={skillList[i]} isScrolled={isScrolled} />
        </Row>
      </Tab>
    );
  }


  return (
    <Jumbotron ref={skillsTabRef} fluid className="m-0 bg-dark bg-gradient" id="skills">
      <Container className="p-5 text-light">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center" style={{ color: '#62E884' }}>
          <TypeAnimation cursor={true} sequence={[heading, 3000, '']} repeat={Infinity} />
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey={list[0][0]}
          id="skills-tabs"
          fill
        >
          {list}
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
