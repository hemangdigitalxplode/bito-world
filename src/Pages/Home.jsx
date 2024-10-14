/* eslint-disable no-unused-vars */
import React from 'react'
import BannerHome from '../assets/home-baner.png'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Section2 from '../assets/section-2.png'
import Section3 from '../assets/chirag-paswan.png'
import PravinKumar from '../assets/pravin-kumar.png'
import MembershipImg from '../assets/membership.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Home = () => {
    return (
        <>
            {/* Hero Banner */}
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mainSwiper"
                style={{
                    "--swiper-navigation-color": "#fff",
                }}
            >
                <SwiperSlide
                    style={{
                        "background-image": `url(${BannerHome})`,
                        // "background-size": "contain",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        padding: "250px 0",
                    }}
                    className="h-100"
                >
                    <div className="container text-white">
                        <Row>
                            <Col lg={4}>
                                <div>
                                    <h6 style={{ fontSize: "20px" }}>
                                        Welcome to <br />
                                        <span className="sub-heading">
                                            Bihar International Trade Organization
                                        </span>{" "}
                                        <br />
                                        <span className="main-banner-heading p-0 m-0">BITO</span>
                                    </h6>
                                </div>

                                <p className="bottom-heading">
                                    Empowering Bihar - Inspiring World
                                </p>
                                <Button
                                    style={{
                                        borderColor: "white",
                                        fontSize: "12px",
                                        borderRadius: "50px",
                                    }}
                                    className="rounded-full bg-white text-black outline-none border-none px-3 py-1 text-small"
                                >
                                    BECOME A MEMBER
                                </Button>
                            </Col>

                            <Col lg={4}></Col>

                            <Col className="right-heading right-col" lg={4}>
                                <h6>
                                    Your Gateway to <span>Bihar&apos;s</span>
                                </h6>
                                <h6>
                                    {" "}
                                    <span>Rich Heritage</span> and Future
                                </h6>
                                <h6>Opportunities</h6>

                                <hr style={{ color: "white" }} />
                                <p>
                                    Join us in celebrating Bihar&apos;s legacy while fostering
                                    innovation and global connections for a brighter tomorrow.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        "background-image": `url(${BannerHome})`,
                        // "background-size": "contain",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        padding: "250px 0",
                    }}
                    className="h-100"
                >
                    <div className="container text-white">
                        <Row>
                            <Col lg={4}>
                                <div>
                                    <h6 style={{ fontSize: "20px" }}>
                                        Welcome to <br />
                                        <span className="sub-heading">
                                            Bihar International Trade Organization
                                        </span>{" "}
                                        <br />
                                        <span className="main-banner-heading p-0 m-0">BITO2</span>
                                    </h6>
                                </div>

                                <p className="bottom-heading">
                                    Empowering Bihar - Inspiring World
                                </p>
                                <Button
                                    style={{
                                        borderColor: "white",
                                        fontSize: "12px",
                                        borderRadius: "50px",
                                    }}
                                    className="rounded-full bg-white text-black outline-none border-none px-3 py-1 text-small"
                                >
                                    BECOME A MEMBER
                                </Button>
                            </Col>

                            <Col lg={4}></Col>

                            <Col className="right-heading right-col" lg={4}>
                                <h6>
                                    Your Gateway to <span>Bihar&apos;s</span>
                                </h6>
                                <h6>
                                    {" "}
                                    <span>Rich Heritage</span> and Future
                                </h6>
                                <h6>Opportunities</h6>

                                <hr style={{ color: "white" }} />
                                <p>
                                    Join us in celebrating Bihar&apos;s legacy while fostering
                                    innovation and global connections for a brighter tomorrow.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        "background-image": `url(${BannerHome})`,
                        // "background-size": "contain",
                        "background-repeat": "no-repeat",
                        "background-position": "center",
                        padding: "250px 0",
                    }}
                    className="h-100"
                >
                    <div className="container text-white">
                        <Row>
                            <Col lg={4}>
                                <div>
                                    <h6 style={{ fontSize: "20px" }}>
                                        Welcome to <br />
                                        <span className="sub-heading">
                                            Bihar International Trade Organization
                                        </span>{" "}
                                        <br />
                                        <span className="main-banner-heading p-0 m-0">BITO3</span>
                                    </h6>
                                </div>

                                <p className="bottom-heading">
                                    Empowering Bihar - Inspiring World
                                </p>
                                <Button
                                    style={{
                                        borderColor: "white",
                                        fontSize: "12px",
                                        borderRadius: "50px",
                                    }}
                                    className="rounded-full bg-white text-black outline-none border-none px-3 py-1 text-small"
                                >
                                    BECOME A MEMBER
                                </Button>
                            </Col>

                            <Col lg={4}></Col>

                            <Col className="right-heading right-col" lg={4}>
                                <h6>
                                    Your Gateway to <span>Bihar&apos;s</span>
                                </h6>
                                <h6>
                                    {" "}
                                    <span>Rich Heritage</span> and Future
                                </h6>
                                <h6>Opportunities</h6>

                                <hr style={{ color: "white" }} />
                                <p>
                                    Join us in celebrating Bihar&apos;s legacy while fostering
                                    innovation and global connections for a brighter tomorrow.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
            </Swiper>

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
                    {/* Fouth Section */}
                    <Row className='mt-5'>
                        <Col lg={6}>
                            <Image className='mw-100' src={PravinKumar} alt='pravin-kumar' />
                            <h2 className='section-2-head'>Pravin Kumar</h2>
                            <p className='chairman'>President</p>
                            <span className='chairmain-inner'>Welcome to Bihar International Trade Organization</span>
                            <p className='chairmain-msg'>
                                Dear All,
                                <br />
                                <br />
                                It is with great pride and responsibility that I address you as the President of the Bihar International Trade Organisation (BITO). Under leadership of Sh. Chirag Paswan , as we embark on a transformative journey, BITO is set to drive significant change in the social, economic, and cultural landscapes of Bihar.....
                            </p>
                            <div>
                                <Button className='section-3-btn px-4 py-2'>Read More</Button>
                            </div>
                        </Col>



                        <Col lg={6}>
                            <Image className='mw-100' src={PravinKumar} alt='pravin-kumar' />
                            <h2 className='section-2-head'>Pravin Kumar</h2>
                            <p className='chairman'>President</p>
                            <span className='chairmain-inner'>Welcome to Bihar International Trade Organization</span>
                            <p className='chairmain-msg'>
                                Dear All,
                                <br />
                                <br />
                                It is with great pride and responsibility that I address you as the President of the Bihar International Trade Organisation (BITO). Under leadership of Sh. Chirag Paswan , as we embark on a transformative journey, BITO is set to drive significant change in the social, economic, and cultural landscapes of Bihar.....
                            </p>
                            <div>
                                <Button className='section-3-btn px-4 py-2'>Read More</Button>
                            </div>
                        </Col>
                    </Row>
                    <div className='w-100 mx-auto'>
                        <h1 style={{ fontSize: '25px', position: 'relative', color: '#b27f4a', marginTop: '30px', fontWeight: '600' }} className='text-center'>
                            Meet our Advisory Board
                            <span style={{
                                position: 'absolute',
                                bottom: '-10px', // Adjusts distance below the heading
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '280px',  // Width of the underline
                                height: '2px',  // Thickness of the underline
                                backgroundColor: '#b27f4a' // Color of the underline
                            }}></span>
                        </h1>
                    </div>

                </Container>
            </div>

            {/* Fifth Section */}
            <Container className='my-5'>
                <Row style={{ background: '#422a1d' }}>
                     
                        <Col className='p-5' lg={4}>
                            <div className='membership'>
                                <h4>Memebership</h4>
                                <p>Membership in BITO will be open to individuals, entrepreneurs, industrialists, professionals, and organizations having a connection to Bihar and sharing the vision and values of the organization.</p>
                                <div>
                                    <Button className='membership-btn px-4 mt-4'>Become A Member</Button>
                                </div>
                            </div>  
                        </Col>
                        <Col lg={8}>
                            <Image className='mw-100' src={MembershipImg} alt='membership-img' />
                        </Col>
                    

                </Row>

            </Container>






        </>
    )
}

export default Home