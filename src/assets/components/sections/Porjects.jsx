import React from "react";
import styled from "styled-components";
import Canva from "../projects/Canva";

const StyledProjects = styled.div`
    width: 100%;
    height: auto;
    padding: var(--spacer) var(--paddingPage);
    display: flex;
    flex-direction: column;
    gap: var(--xxl-sizing);
    @media screen and (max-width: 1000px){
        gap: var(--xl-sizing);
    }
`

function Projects() {
    return (
        <StyledProjects>
            <h2>{'<'}Projects /{'>'}</h2>
            <Canva />
        </StyledProjects>
    )
}

export default Projects