

/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const serviceId = "service_wrk5j76"
const templateId = "template_ajfrv6q"
const publicKey = "3CoQnyOSI3gq1XqZ6"

const Modal1 = (props) => {
  const [activeButton, setActiveButton] = useState("foreign");

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    occupation: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    console.log(e);
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Email using Email JS
  const sendEmail = async () => {
    try {
      const result = await emailjs.send(
        serviceId, 
        templateId,  
        formData,    
        publicKey    
      );
  
      // toast.success("Email sent successfully:");
      console.log(formData);
      console.log(result);
      
      
      
  
    } catch (error) {
      toast.error("Error sending email:", error);
       
    }
  };
  
  


  const handlebeforeClose = () => {
    props.setModalShow(false)
    props.setIndividualModal(true)
    sendEmail()
  }
  return (

    <>

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
            Foreign
          </button>
          <button
            className={`selector-btn ${activeButton === "indian" ? "active" : ""}`}
            onClick={() => setActiveButton("indian")}
          >
            Indian
          </button>
        </div>
        <Modal.Body>
          <Form className="modalForm d-flex flex-column justify-content-center">
            <Form.Group>
              <Form.Control type="text" placeholder="Name" value={formData.name} name="name"
                onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Country" value={formData.country}
                onChange={handleChange} name="country" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="State" value={formData.state}
                onChange={handleChange} name="state" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="email" placeholder="Email" value={formData.email}
                onChange={handleChange} name="email" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="number" placeholder="Phone" value={formData.phone}
                onChange={handleChange} name="phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Occupation" value={formData.occupation}
                onChange={handleChange} name="occupation" />
            </Form.Group>
            <Button
              style={{ width: '40%', margin: '0 auto' }}
              variant="primary"
              // type="submit"
              className="section-3-btn my-2"
              onClick={handlebeforeClose}
            >
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};






export default Modal1;