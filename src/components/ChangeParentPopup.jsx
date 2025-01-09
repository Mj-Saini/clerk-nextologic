/* eslint-disable react/prop-types */

import { Modal, Button, Form } from "react-bootstrap";

const ChangeParentPopup = ({show,setShow}) => {

const handleClose = () => {setShow(false)}

  return (
    <div>
   

      {/* Popup Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-4">
          <h5 className="mb-4">Change parent user</h5>
          <Form>
            <Form.Group controlId="parentBrokerSelect" className="mb-3">
              <Form.Label>Select Parent Broker</Form.Label>
              <Form.Select>
                <option>No Parent</option>
                <option>Parent 1</option>
                <option>Parent 2</option>
                <option>Parent 3</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="outline-danger" onClick={handleClose}>
              No
            </Button>
            <Button variant="danger">Yes, Change Broker</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChangeParentPopup;
