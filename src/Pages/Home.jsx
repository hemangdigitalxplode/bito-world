/* eslint-disable no-unused-vars */
import React from 'react'
import BannerHome from '../assets/home-baner.png'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
const Home = () => {
    return (
        <>
      {/* Hero Banner */}
            <div className="position-relative">
                {/* Image */}
                <Image className="mw-100" src={BannerHome} alt="home-banner" />

                {/* Text overlay */}
                <div className="position-absolute top-50 start-50 translate-middle text-white w-100 container">
                    <Row>
                        <Col lg={4}>
                            <div>
                                <h6 style={{fontSize:'20px'}}>Welcome to <br />
                                    <span className='sub-heading'>Bihar International Trade Organization</span> <br />
                                    <span className='main-banner-heading p-0 m-0'>BITO</span>
                                </h6>

                            </div>


                           
                            <p className='bottom-heading'>Empowering Bihar - Inspiring World</p>
                            <Button style={{ borderColor: 'white', fontSize: '12px', borderRadius: '50px' }} className='rounded-full bg-white text-black outline-none border-none px-3 py-1 text-small'>BECOME A MEMBER</Button>
                        </Col>



                        <Col lg={4}></Col>



                        <Col className='right-heading right-col' lg={4}>
                            <h6>Your Gateway to <span>Bihar's</span></h6>
                            <h6> <span>Rich Heritage</span> and Future</h6>
                            <h6>Opportunities</h6>

                            <hr style={{color:'white'}} />
                            <p>Join us in celebrating Bihar's legacy while fostering innovation and global connections for a brighter tomorrow.</p>

                        </Col>
                    </Row>

                </div>
            </div>

            {/* Second Section */}
            <Container>


            </Container>
 
        </>
    )
}

export default Home