import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber'
import Room from "../projects/Room";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const StyledAbout = styled.div`
    width: 100%;
    padding: var(--spacer) var(--paddingPage);
    display: flex;
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
    .infos{
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: var(--xl-sizing);
        height: 70vh;
        p.body{
            width: 100%;
        }
        .social{
            position: absolute;
            bottom: 0;
            display: flex;
            gap: var(--xl-sizing);
        }
        @media screen and (max-width: 1000px){
            width: 100%;
            height: auto;
            .social{
                position: relative;
            }
        }
    }
    .room{
        display: flex;
        align-items: flex-end;
        width: 50%;
        border-radius: 1px solid red;
        height: 70vh;
        @media screen and (max-width: 1000px){
            width: 100%;
        }
    }
    span{
        color: var(--purpleBlue);
    }
`

function About() {

    const [cameraPosition, setCameraPosition] = useState([1, 10, 12]);

    // Mettez à jour la position de la caméra en fonction de la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 1000) {
                setCameraPosition([1, 10, 22]);  // Position par défaut pour les écrans plus petits
            } else {
                setCameraPosition([1, 10, 12]);  // Ajustez la position pour les écrans plus larges
            }
        };

        // Ajoutez un écouteur d'événement pour la taille de l'écran
        window.addEventListener("resize", handleResize);

        // Appelez la fonction une fois au chargement pour définir la position initiale
        handleResize();

        // Nettoyez l'écouteur d'événement lorsque le composant est démonté
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <StyledAbout>
            <div className="infos">
                <h2>{"<"}About /{">"}</h2>
                <div className="body">
                    <p>Hi ,</p><br />
                    <p>I'm Raphaël, a <span>Front-End</span> Developer</p><br />
                    <p>My main focus is on honing my skills</p><br />
                    <p>Let's create amazing digital experiences together !</p>
                </div>
                <Splide
                    options={{
                        type: "loop",
                        gap: "80px",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        autoWidth: true,
                        perPage: 3,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: false,
                            speed: -0.5
                        }
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <span>REACT</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>HTML</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>CSS</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>JS</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>REACT THREE FIBER</span>
                    </SplideSlide>
                    <SplideSlide>
                        <span>THREEJS</span>
                    </SplideSlide>
                </Splide>
                <div className="social">
                    <a href="https://github.com/FernandezRaphael" target="_blank">{"<"}Github {"/>"}</a>
                    <a href="https://www.linkedin.com/in/raphaël-fernandez-450893206" target="_blank">{"<"}Linkdin {"/>"}</a>
                    <a href="/">{"<"}INDEX 01 {"/>"}</a>
                </div>
            </div>
            <div className="room">
                <Canvas
                    flat
                    camera={{
                        near: 0.1,
                        far: 200,
                        position: cameraPosition,
                    }}
                >
                    <Room />
                </Canvas>
            </div>
        </StyledAbout>
    )
}

export default About