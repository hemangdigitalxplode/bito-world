import { Button } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Modal1 = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>Active</Nav.Item>
            <Nav.Item>Option 2</Nav.Item>
            <Nav.Item>Disabled</Nav.Item>
          </Nav>
          <Form className="modalForm d-flex flex-column justify-content-center">
            <Form.Group>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Occupation" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="section-3-btn my-2"
            >
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modal1;
