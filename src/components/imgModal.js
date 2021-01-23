import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactPlayer from "react-player";

import Twimage from '../../static/images/bella-edward-trees-jan-21-code.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';



export default function ImgModal(props) {
    const [visibility, setVisibility] = useState(false);
    const [imageMode, setImageMode] = useState(false);

    const handleInvisible = () => setVisibility(false);
    const handleVisible = () => setVisibility(true);

    const handleVid = () => {
        setImageMode(imageMode === false)
    }
   
    return (
        <div>
            <Button onClick={handleVisible} className="imgModalButton">
                <img src={props.path} className="modalButtonImage"/>
            </Button>
            <Modal show={visibility} onHide={handleInvisible} dialogClassName="imageModal" backdrop={true}>
                <Modal.Header>
                    <Modal.Title className="modalHeader"> 
                        <div>
                            <p className="modalTitle">{props.title}</p> 
                            <p>{props.date}</p>
                        </div>
                        <Button onClick={handleInvisible} className="closeModalButton">
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <Button onClick={handleVid} className="vidButton">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                    {imageMode === false ? (
                        <img src={props.path} className="modalImageFocus"/>
                    ): (
                        <div>
                            <ReactPlayer url="https://www.youtube.com/watch?v=L_jWHffIx5E"/>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    )

}