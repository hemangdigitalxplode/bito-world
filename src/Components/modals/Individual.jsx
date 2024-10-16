/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";

const Individual = ({props}) => {
    const [activeButton, setActiveButton] = useState("foreign");
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    contentClassName="custom-modal-style" // New class added for styling
  >
    {/* Selector buttons for input of foreign and indian */}
    <div className="form-top-selector">
    <button
      className={`selector-btn ${activeButton === "foreign" ? "active" : ""}`}
      onClick={() => setActiveButton("foreign")}
    >
    Individual
    </button>
    <button
      className={`selector-btn ${activeButton === "indian" ? "active" : ""}`}
      onClick={() => setActiveButton("indian")}
    >
      Corporate
    </button>
  </div>
    <Modal.Body>
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
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

export default Individual