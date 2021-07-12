import React from 'react';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Project(props) {
    return (
      <figure className="effect-oscar">
      <img className="icon" src={props.img} alt={props.alt}></img>
        <figcaption>
          <h2>{props.title}<span>{props.span}</span> <br />
            <a href={props.link} target="_blank" rel="noreferrer"><FaLink /></a>
            <a href={props.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          </h2>
          <p>{props.tech}</p>
        </figcaption>     
      </figure>
    );
}

export default Project;