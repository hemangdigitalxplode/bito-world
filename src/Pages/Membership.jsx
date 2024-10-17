/* eslint-disable no-unused-vars */
import React from 'react'
import BannerHome from '../assets/membership-banner.png'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import RightArrow from '../assets/right-arrow.png'
import Kamal from '../assets/kamal.png'
import MembershipCTA from '../Components/MembershipCTA'
import Roadmap from '../Components/Roadmap'

const Membership = () => {
    return (
        <>
            {/* Home Banner */}
            <div

                style={{
                    "background-image": `url(${BannerHome})`,
                    // "background-size": "contain",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    padding: "350px 0",
                    marginTop:'-170px'
                }}
                className="h-100">

                <div className='banner-content-membership container'>
                    <div className=''>
                        <h6 className='text-white' style={{ fontSize: "20px" }}>
                            Welcome to <br />
                            <span className="sub-heading text-white">
                                Bihar International Trade Organization
                            </span>{" "}
                            <br />
                            <span className="main-banner-heading-membership p-0 m-0 text-white">BITO Membership</span>
                        </h6>


                        {/* <div>
                            <Button style={{
                                borderColor: "white",
                                fontSize: "18px",
                                borderRadius: "50px",
                                marginTop: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}
                                className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small">Become a Member
                                <Image style={{ marginTop: '4px' }} src={RightArrow} alt='right-arrow' />
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div style={{ padding: '70px 0' }}>
                <Container>
                    <h1 className='text-center membership-heading'>Become a Member</h1>

                    <div style={{ gap: '10px', marginTop: '50px' }} className='d-flex align-items-center justify-content-center'>
                        <Button className=' py-2 member-btn'>Individual</Button>
                        <Button className=' py-2 member-btn'>Corporate</Button>
                    </div>
                </Container>
            </div>
            <hr />


            {/* Third Section */}
            <Container className='my-5'>

                <Row>
                    <Col className='left-side-div' lg={4}>
                        <h2 style={{ color: '#b27f4a' }} className='section-2-head'>Transform Bihar <br /> Together, We Can</h2>
                        <div className='section-para'>
                            <p>BITO invites investors, organizations, NRIs, and HNIs to be part of this transformative journey.</p>

                            <p>
                                With a dedicated team, advanced infrastructure, and extensive resources, we offer a seamless experience through our Single-Window Clearance system.
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>Explore diverse opportunities </span>
                                to make
                                a significant impact:
                            </p>

                        </div>



                    </Col>








                    <Col
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        lg={8}>

                        <Image style={{ width: '70%' }} src={Kamal} alt="img" />
                    </Col>
                </Row>
            </Container>


            {/* Forth Seciton */}
            <Roadmap />






            {/* CTA here */}
            <MembershipCTA />


        </>
    )
}

export default Membership