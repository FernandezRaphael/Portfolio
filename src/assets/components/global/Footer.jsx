import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;
    margin-top: var(--spacer);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--l-sizing);
    p.big_text{
        font-size: 164px;
        text-transform: uppercase;
        font-weight: 100;
        font-family: 'alpha';
        line-height: 90%;
        text-align: center;
        max-width: 70%;
        opacity: 1;
        @media screen and (max-width: 1000px){
            font-size: 64px;
            max-width: 90%;
        }
    }
    .social{      
        position: absolute;
        left: var(--m-sizing);
        bottom: var(--m-sizing);
        display: flex;
        gap: var(--xxl-sizing);
        @media screen and (max-width: 1000px){
            gap: var(--l-sizing);
        }
    }
    & button {
        outline: none;
        border: none;
        background: transparent;
        transition: color 0.5s;
        font-family: 'alpha';
        text-transform: uppercase;
        font-size: var(--m-sizing);
    }
`
const email = "fernandezraphael59@gmail.com";

function Footer({ link, text }) {
    return (
        <StyledFooter>
            <h3>
                {"<"}Contact me {"/>"}
            </h3>
            <p
                className="big_text"
                onClick={() => {
                    window.location.href = `mailto:${email}`;
                }}
            >
                Lets work together
            </p>
            <p>Copyright © 2024 Fernandez Raphaël. All rights reserved.</p>
            <div className="social">
                <a href="/">{"<"}Index 01 {"/>"}</a>
                <a href="#Projects">{"<"}Projects {"/>"}</a>
                <a href="#About">{"<"}About {"/>"}</a>
            </div>

        </StyledFooter>
    )
}

export default Footer