import React from 'react';
import './ProjectModal.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Button, Modal } from 'react-bootstrap';


function ProjectModal(props) {

  const properties = {
    duration: 3000,
    transitionDuration: 500,
  };

  return (
    <>

      <Modal
        show={props.show}
        onHide={props.handleClose}
        dialogClassName="modal-90w"
        centered>
        <div className="slide-container">
           <Slide {...properties}>
             <div className="each-slide">
               <div style={{'backgroundImage': `url(${props.slideImage1})`}}>
               </div>
             </div>
             <div className="each-slide">
               <div style={{'backgroundImage': `url(${props.slideImage2})`}}>
               </div>
             </div>
             <div className="each-slide">
               <div style={{'backgroundImage': `url(${props.slideImage3})`}}>
               </div>
             </div>
           </Slide>
          </div>
        <Modal.Header>
          <Modal.Title>{props.MainText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.Explaination}</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-info" onClick={()=>window.open(props.githubPage, "_blank")}>
          Check GitHub Page
        </Button>
          <Button variant="outline-secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )

}

export default ProjectModal;
