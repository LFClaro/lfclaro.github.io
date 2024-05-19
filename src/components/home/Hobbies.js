import React from 'react';
import HobbyComponent from "./HobbyComponent";
import {
    Container,
    Row,
} from "react-bootstrap";

const Hobbies = ({ heading, content }) => {
    return (
        <section className="section" id="hobbies">
            <Container>
                    <h3 className="display-10 mb-2 text-center">
                        {heading}
                    </h3>
                    <Row
                        className="justify-content-center">
                        {
                            content.map((data, index) => {
                                return <HobbyComponent key={index} data={data} />
                            })
                        }
                    </Row>
            </Container>
        </section>
    );
}

export default Hobbies;