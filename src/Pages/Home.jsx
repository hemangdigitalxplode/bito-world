/* eslint-disable no-unused-vars */
import React from 'react'
import BannerHome from '../assets/home-baner.png'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Section2 from '../assets/section-2.png'
import Section3 from '../assets/chirag-paswan.png'
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
                                <h6 style={{ fontSize: '20px' }}>Welcome to <br />
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

                            <hr style={{ color: 'white' }} />
                            <p>Join us in celebrating Bihar's legacy while fostering innovation and global connections for a brighter tomorrow.</p>

                        </Col>
                    </Row>

                </div>
            </div>

            {/* Second Section */}
            <Container className='mb-5' style={{ marginTop: '80px' }}>
                <Row className='section-2-row'>
                    {/* Left div for content */}
                    <Col className='left-side-div' lg={6}>
                        <h2 className='section-2-head'>Empowering Bihar</h2>
                        <span>Fostering <strong>Entrepreneurship, Innovation, and
                            Global Connections</strong></span>
                        <div className='section-para'>
                            <p>The Bihar International Trade Organization (BITO) is a key force for progress and unity for people, both in India and worldwide. Through a series of well-structured initiatives, BITO is dedicated to building a vibrant, cohesive, and prosperous community that transcends borders and generations. </p>

                            <p>
                                By focusing on economic growth, cultural preservation, and global engagement, BITO ensures that Bihar’s contributions are not only recognized but celebrated worldwide.
                            </p>
                        </div>

                        <div>
                            <Button className='section-2-btn px-4 py-2'>Learn More</Button>
                        </div>
                    </Col>
                    {/* Right div for image */}
                    <Col className='right-side-div mx-auto' lg={6}>
                        <Image className='section-2-img' src={Section2} alt='section-2 img' />
                    </Col>
                </Row>

            </Container>

            {/* Third section */}
            <div style={{ marginTop: '80px', backgroundColor: '#fffbf5' }}>
                <Container className='mb-5' style={{ marginTop: '80px' }}>
                    <h1 className='text-center section-3-heading'>Meet Our Visinory Leaders</h1>
                    <Row className='section-2-row'>

                        {/* Right div for image */}
                        <Col className='right-side-div' lg={6}>
                            <Image className='section-2-img' src={Section3} alt='section-2 img' />
                        </Col>
                        {/* Left div for content */}
                        <Col className='left-side-div' lg={6}>
                            <h2 className='section-2-head'>Chirag Paswan</h2>
                            <p className='chairman'>Chairman</p>
                            <div className='section-para'>
                                <p>
                                    Dear All, <br />
                                    <br />
                                    I extend a warm welcome to you on behalf of Bihar International Trade Organization (BITO), a platform committed to advancing economic prosperity and cultural heritage in Bihar. At BITO, our mission revolves around shaping an "Atma Nirbhar Bihar" and fostering positive change through collaborative efforts.
                                    <br />
                                    <br />
                                    Empowering Innovation with BITO Startup
                                </p>
                            </div>

                            <div>
                                <Button className='section-3-btn px-4 py-2'>Read More</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                        
                        </Col>



                        <Col lg={6}></Col>
                    </Row>

                </Container>
            </div>




        </>
    )
}

export default Home