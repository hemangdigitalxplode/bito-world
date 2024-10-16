/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";

const Individual = (props) => {
  const [activeTab, setActiveTab] = useState("individual"); // Manage active tab state

  const renderForm = () => {
    if (activeTab === "individual") {
      return (
        <Form className="modalForm d-flex flex-column justify-content-center">
          <Form.Group>
            <Form.Control type="text" placeholder="City with Pincode" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Gender" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Qualification" />
          </Form.Group> 
          <Button style={{width:'40%',margin:'0 auto'}} variant="primary" type="submit" className="section-3-btn my-2">
            Submit
          </Button>
        </Form>
      );
    } else {
      // Corporate Form
      return (
        <Form className="modalForm d-flex flex-column justify-content-center">
          <Form.Group>
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Industry Type" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" placeholder="State" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Button style={{width:'40%',margin:'0 auto'}} variant="primary" type="submit" className="section-3-btn my-2">
            Submit
          </Button>
        </Form>
      );
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="custom-modal-style" // New class added for styling
    >
      <div className="form-top-selector">
        <button
          className={`selector-btn ${activeTab === "individual" ? "active" : ""}`}
          onClick={() => setActiveTab("individual")}
        >
          Individual
        </button>
        <button
          className={`selector-btn ${activeTab === "corporate" ? "active" : ""}`}
          onClick={() => setActiveTab("corporate")}
        >
          Corporate
        </button>
      </div>
      <Modal.Body>
        {renderForm()} {/* Render the form based on the active tab */}
      </Modal.Body>
    </Modal>
  );
};

export default Individual;
