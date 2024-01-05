import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1000px){
        gap: 16px;
    }
    h1{
        font-size: 90px;
        text-transform: uppercase;
        line-height: 94%;
        font-weight: 100;
        @media screen and (max-width: 1000px){
        font-size: 35px;
        }
    }
    h2{
        font-size: 25px;
        &::before{
            display: none;
        }
        @media screen and (max-width: 1000px){
        font-size: 20px;
        }
    }
    span{
        color: var(--purpleBlue);
    }
    .text-p span{
        margin: -10px;
    }    
`

function Hero(props) {
    return (
        <StyledHero>
            <h1>Fernandez <span>Raphaël</span></h1>
            <h2 className="text-p"><span>Front-end</span>developer</h2>
        </StyledHero>
    )
}

export default Hero;