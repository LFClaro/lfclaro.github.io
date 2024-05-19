import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {
  Container,
  Card,
  Col,
  Row,
} from "react-bootstrap";

const HobbyCard = ({ data }) => {
  return (
    <>
      <Container style={{ width: 100 }}>
        <Col className="text-center" style={{ width: 100 }}>
            <Card
              bg="light"
              text='black'
              className="mb-1 mx-auto border rounded-circle justify-content-center"
              style={{ width: 80, height: 80 }}>
              <Card.Text
                style={{ fontSize: 40 }}>
                {data.emoji || <Skeleton />}
              </Card.Text>
            </Card>
            <Card.Text>{data.label || <Skeleton />}</Card.Text>
        </Col>
      </Container>
    </>
  );
}

export default HobbyCard;