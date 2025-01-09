
import { useState } from "react";
import { Container, Table, Button, Form, Dropdown } from "react-bootstrap";
import ChangeParentPopup from "./ChangeParentPopup";

const DittoSettings = () => {
    const [show, setShow] = useState(false);
  return (
    <Container fluid className="p-4">
        {show &&  (
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center ">
          <div
            onClick={() => setShow(false)}
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/50"
          ></div>

          <ChangeParentPopup setShow={setShow} show={show}/>
        </div>
      )}
      {/* Parent Broker Section */}
      <div className="d-flex align-items-center justify-content-between border p-3 mb-4">
        <div className="d-flex align-items-center">
          <span className="me-3 fw-bold">Parent Broker:</span>
          <span className="text-muted">No Parent</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Form.Control
            type="text"
            placeholder="Max Allowed"
            style={{ width: "150px" }}
          />
          <Form.Control
            type="text"
            placeholder="Max Multiplier"
            style={{ width: "150px" }}
          />
          <Button  onClick={() => setShow(true)} variant="danger">Change Parent</Button>
          <Button variant="danger">Attach Child</Button>
        </div>
      </div>

      {/* Table Section */}
      <Table bordered hover responsive="sm" className="mb-4">
        <thead>
          <tr>
            <th>Broker</th>
            <th>Child ID</th>
            <th>Multiplier</th>
            <th>Status</th>
            <th>Action</th>
            <th>Added At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="text-center text-muted">
              No data available
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Pagination Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <span>Items per page:</span>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              10
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>10</Dropdown.Item>
              <Dropdown.Item>20</Dropdown.Item>
              <Dropdown.Item>50</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <span className="me-3 text-muted">0-0 of 0</span>
          <Button variant="outline-secondary" size="sm" disabled>
            &lt;
          </Button>
          <Button variant="outline-secondary" size="sm" disabled className="ms-2">
            &gt;
          </Button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border p-4 d-flex align-items-center justify-content-between bg-light">
        <div>
          <h5 className="mb-2">
            1Cliq Ditto 🎉
          </h5>
          <p className="mb-3">
            Trade. Replicate. Succeed. <br />
            Trading is never gonna be the same again.
          </p>
          <Button variant="danger">Show Ditto Plans</Button>
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="Illustration"
          style={{ maxWidth: "150px" }}
        />
      </div>
    </Container>
  );
};


export default DittoSettings