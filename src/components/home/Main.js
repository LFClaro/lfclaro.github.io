import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration.js";
import { BackgroundImage } from 'react-image-and-background-image-fade';

import Hero from "./Hero.js";

const Main = React.forwardRef(
    ({ wallpapers, gradient, fullName, titles, tagline, email, socials }, ref) => {
        return (
            <BackgroundImage
                src={wallpapers}
                isResponsive
                lazyLoad
                useChild
            >
                <Jumbotron
                    fluid
                    id="home"
                    style={{
                        background: `${gradient}`,
                        // backgroundSize: "cover",
                    }}
                    className="bgLayer title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
                >
                    <div id="stars"></div>
                    <Container className="text-center">
                        <Hero
                            fullName={fullName}
                            titles={titles}
                            tagline={tagline}
                            email={email}
                            socials={socials}
                        />
                    </Container>
                </Jumbotron>
            </BackgroundImage>
        );
    }
);

export default Main;