import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const OverviewModal = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="modButt" variant="primary" onClick={handleShow}>
        Overview
      </Button>

      <Modal
        className="modalOverview"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </div>
  );
};

export default OverviewModal;
