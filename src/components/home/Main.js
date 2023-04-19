import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration.js";
import { createClient } from 'pexels';

import Hero from "./Hero.js";

// const client = createClient(process.env.REACT_PEXELS_API_KEY);

const Main = React.forwardRef(
    ({ gradient, fullName, titles, tagline, email, socials }, ref) => {
        // const photo = client.photos.random

        return (
            <div className='bgCustom bgstyle'>
                <Jumbotron
                    fluid
                    id="home"
                    style={{
                        // background: `${gradient}`,
                        // backgroundImage: "url(https://picsum.photos/1280/720/?blur=2&gravity=north)",
                        // backgroundImage: "url(https://loremflickr.com/1280/720/dark,beautiful/all)",
                        // backgroundSize: "cover",
                    }}
                    className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
                >
                    <div id="stars"></div>
                    <Container className="text-center">
                        {/* <h1 ref={ref} className="display-1">
                        Hello there!<br />
                        I'm {fullName}
                    </h1>
                    <div className="lead fw-bold">
                        {tagline}
                    </div> */}
                        <Hero
                            fullName={fullName}
                            titles={titles}
                            tagline={tagline}
                            email={email}
                            socials={socials}
                        />
                    </Container>
                </Jumbotron>
            </div>
        );
    }
);

export default Main;