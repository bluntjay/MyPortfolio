
import React from "react";
import {Button, Header, Title, Footer, Body, Modal} from "react-bootstrap";


function Dialog(props) {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="eachModal">
      <Button  className="modButt" variant="primary" onClick={handleShow}>
        Overview
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </div>
  );
}

export default Dialog;
 