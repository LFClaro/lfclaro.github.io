import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {
  Card,
  Col,
  Row,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Card
        bg="light"
        text='black'
        className="p-3 mb-5">
        <Row className="pb-3">
          <Col xs="12" md="3" className="me-3">
            <img className="bg-white" height="100" src={data.companyLogo} alt="" />
          </Col>
          <Col xs="8">
            <Card.Title as="h4">{data.role || <Skeleton />} </Card.Title>
            <Card.Text>
              {data.companyName || <Skeleton />}
              <br />
              <i>{data.date || <Skeleton />}</i>
            </Card.Text>
          </Col>
        </Row>
        <Card.Text>
        <div style={{ whiteSpace: 'pre-line', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          {data.description || <Skeleton />}
          </div>
        </Card.Text>
      </Card>
    </Col>
  );
}

export default ExperienceCard;