import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleHeader = styled.div`
  width: 100%;
  padding: var(--m-sizing);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  nav {
    display: flex;
    gap: var(--xl-sizing);
  }
`;

const ColorSquare = styled.div`
  width: 15px;
  height: 15px;
  cursor: crosshair;
  border: 2px solid transparent; /* Ajout d'une bordure transparente */
  ${(props) => props.selected &&
    `
    border-color: #fff; /* Couleur de la bordure pour le carré sélectionné */
  `}
`;

const SquareContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--xs-sizing);
  position: fixed;
  top: 50px;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    position: absolute;
  }
`;

function Header() {

  const [textColor, setTextColor] = useState("#BA8AFA");

  const handleColorClick = (color) => {
    setTextColor(color);
    document.documentElement.style.setProperty("--purpleBlue", color);
  };

  const colors = ["#BA8AFA", "#3498db", "#e74c3c", "#2ecc71"];

  return (
    <header>
      <StyleHeader>
        <Link to="/">{"<"}Index 01 {"/>"}</Link>
        <SquareContainer>
          {colors.map((color, index) => (
            <ColorSquare
              key={index}
              style={{ backgroundColor: color }}
              selected={textColor === color} // Ajout de la classe conditionnelle
              onClick={() => handleColorClick(color)}
            ></ColorSquare>
          ))}
        </SquareContainer>
        <nav>
          <a href="#Projects">{"<"}Projects {"/>"}</a>
          <a href="#About">{"<"}About {"/>"}</a>
        </nav>
      </StyleHeader>
    </header>
  );
}

export default Header;