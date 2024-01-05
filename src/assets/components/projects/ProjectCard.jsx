import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: var(--carbon-color);
    padding: var(--m-sizing);
    overflow: auto;
    transition: background-color 0.4s, color 0.4s;
    @media screen and (max-width: 1000px){
        padding: var(--xs-sizing);
    }
    .infos{
        mix-blend-mode: difference;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1000px){
            h3, h4{
                font-size: 10px;
            }
        }
        h3{
            display: flex;
            align-items: center;
            gap: var(--xs-sizing);
        }
    }
    &:hover{
        background-color: var(--whiteColor);
    }
    .descritionProject{
        display: flex;
        flex-direction: column;
        width: 100%;
        p{    
            font-size: 13px;
            margin-top: 8px;
            display: flex;
            text-align: center;
            justify-content: center;  
            padding: var(--m-sizing);
        }
        @media screen and (max-width: 1000px){
            p{
                font-size: 8px;
                padding: var(--xs-sizing);
            }
        }
    }
`

function ProjectCard({ name, date, link, description }) {
    return (
        <Link to={link} target="_blank">
            <StyledProjectCard>
                <div className="infos">
                    <h3>{name}</h3>
                    <h4>{date}</h4>
                </div>
                <div className="descritionProject">
                    <p>{description}</p>
                </div>
            </StyledProjectCard>
        </Link>
    )
}

export default ProjectCard