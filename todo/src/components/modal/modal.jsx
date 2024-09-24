import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent=(props)=> {

  return (

      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>props.action(...props.args)}>
            {props.actionText}
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default ModalComponent;