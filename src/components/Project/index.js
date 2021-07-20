import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal'

function Project(props) {

  const [smShow, setSmShow] = useState(false);

  const descriptionBtn = {
    color: "white",
    backgroundColor: "transparent",
    borderStyle: "none",
    marginRight: "5px"
  };

  const spanStyle = {
    marginLeft: "7px"
  }

    return (
      <figure className="effect-chico">
      <img className="icon" src={props.img} alt={props.alt}></img>
        <figcaption>
          <h2 className="p-title">{props.title}<span style={spanStyle}>{props.span}</span> <br />
          <div>
            <button className="desc-modal" style={descriptionBtn} onClick={() => setSmShow(true)}><MdDescription/></button>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
              class="dark"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  {props.title} {props.span}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.description}</Modal.Body>
            </Modal>
            <a href={props.link} target="_blank" rel="noreferrer"><FaLink /></a>
            <a href={props.github} target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          </h2>
          <p>{props.tech}</p>
        </figcaption>     
      </figure>
    );
}

export default Project;