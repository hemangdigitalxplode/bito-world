import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import RightArrow from "../assets/white-right-arrow.png";
import Modal1 from "./modals/modal1";
import Individual from "./modals/Individual";

const MembershipCTA = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [individualModal, setIndividualModal] = useState(false)
    return (
        <>
            <div
                style={{
                    backgroundColor: "#422a1d",
                }}
            >
                <Container>
                    <Row style={{ padding: "50px 0" }}>
                        <Col lg={6}>
                            <div className="membership-cta">
                                <span className="text-white" style={{ fontWeight: "700" }}>
                                    Membership in BITO
                                </span>
                                <p className="text-white">
                                    will be open to individuals, entrepreneurs, industrialists,
                                    professionals, and organizations with ties to Bihar.
                                </p>
                            </div>
                        </Col>

                        <Col className="membership-right-cta-div" lg={6}>
                            <div>
                                <Button
                                    className="enroll-now-btn"
                                    onClick={() => setModalShow(true)}
                                >
                                    {" "}
                                    Enroll Now
                                    <Image
                                        style={{ marginTop: "4px" }}
                                        src={RightArrow}
                                        alt="right-arrow"
                                    />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>


                <Modal1
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setIndividualModal={setIndividualModal} 
                    setModalShow={setModalShow}
                    />
                <Individual
                    show={individualModal}
                    onHide={() => setIndividualModal(false)} />
            </Container>
        </>
    );
};

export default MembershipCTA;
