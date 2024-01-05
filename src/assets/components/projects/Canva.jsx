import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledCanva = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    .card_container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .card{
            width: calc(100% / 5);
            aspect-ratio: 1/1;
            background-color: var(--carbon-color);
            border: solid 1px var(--bg-color);
            transition: opacity 0.7s;
            &.project{
                &:hover{
                    opacity: 1;
                }
            }
            &:hover{
                opacity: 0;
            }
            &.show{
                opacity: 0;
            }
            @media screen and (max-width: 1200px){
                width: calc(100% / 2);
            }
        }
    }
`

function Canva() {

    // Votre tableau de projets
    const projects = [
        { link: '/', name: 'Portfolio', date: '2023 - 2024', description: 'You are currently on it.' },
    ];

    // Ajouter des objets vides au hasard
    const addRandomEmptyCards = (projects) => {
        const numEmptyCards = Math.max(0, 10 - projects.length);
        const emptyCards = Array.from({ length: numEmptyCards }, (_, index) => ({ empty: true, id: index }));

        return [...projects, ...emptyCards];
    };

    // Fonction pour mélanger le tableau de manière aléatoire
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledProjects = shuffleArray(addRandomEmptyCards([...projects]));

    return (
        <StyledCanva>
            <div className="card_container">
                {shuffledProjects.map((project, index) => (
                    <div key={index} className={`card ${project.empty ? 'empty-card' : (project.link ? 'project' : '')}`}>
                        {project.link ? (
                            <ProjectCard link={project.link} name={project.name} date={project.date} description={project.description} />
                        ) : (
                            <div className="empty-card" />
                        )}
                    </div>
                ))}
            </div>
        </StyledCanva>
    )
}

export default Canva