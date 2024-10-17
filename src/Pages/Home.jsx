/* eslint-disable no-unused-vars */
import React from "react";
import BannerHome from "../assets/home-baner.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Section2 from "../assets/section-2.png";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import MembershipImg from "../assets/membership.png";
import Amresh from '../assets/amresh.jpg'
import Vision from "../assets/Layer-21.png";
import Mission from "../assets/Layer-22.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Layer23,
  Layer24,
  Layer25,
  Layer26,
  Layer27,
  Layer28,
  Layer29,
  Layer30,
  Layer31,
  Layer33,
  Layer34,
  ObjectiveGoals,
} from "../assets";
import OurPartner from "../Components/OurPartner";
import { Link } from "react-router-dom";
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
          "marginTop": "-170px"
        }}
      >
        <SwiperSlide
          style={{
            "background-image": `url(${BannerHome})`,
            // "background-size": "contain",
            "background-repeat": "no-repeat",
            "background-position": "center",
          }}
          className="h-100 home-slider"
        >
          <div className="container text-white">
            <Row>
              <Col lg={4}>
                <div className="first-head-box">
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
                <Link to={'/membership'}>

                  <Button
                    style={{
                      borderColor: "white",
                      fontSize: "18px",
                      borderRadius: "50px",
                      marginTop: "30px",
                    }}
                    className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small"
                  >
                    Become a Member
                  </Button>
                </Link>
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

          }}
          className="h-100 home-slider"
        >
          <div className="container text-white">
            <Row>
              <Col lg={4}>
                <div className="first-head-box">
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
                <Link to={'/membership'}>

                  <Button
                    style={{
                      borderColor: "white",
                      fontSize: "18px",
                      borderRadius: "50px",
                      marginTop: "30px",
                    }}
                    className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small"
                  >
                    Become a Member
                  </Button>
                </Link>
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

          }}
          className="h-100 home-slider"
        >
          <div className="container text-white">
            <Row>
              <Col lg={4}>
                <div className="first-head-box">
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
                <Link to={'/membership'}>

                  <Button
                    style={{
                      borderColor: "white",
                      fontSize: "18px",
                      borderRadius: "50px",
                      marginTop: "30px",
                    }}
                    className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small"
                  >
                    Become a Member
                  </Button>
                </Link>
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
      <Container className="mb-5" style={{ marginTop: "80px" }}>
        <Row className="section-2-row">
          {/* Left div for content */}
          <Col className="left-side-div" lg={6}>
            <h2 className="section-2-head">Empowering Bihar</h2>
            <span>
              Fostering{" "}
              <strong>
                Entrepreneurship, Innovation, and Global Connections
              </strong>
            </span>
            <div className="section-para">
              <p>
                The Bihar International Trade Organization (BITO) is a key force
                for progress and unity for people, both in India and worldwide.
                Through a series of well-structured initiatives, BITO is
                dedicated to building a vibrant, cohesive, and prosperous
                community that transcends borders and generations.{" "}
              </p>

              <p>
                By focusing on economic growth, cultural preservation, and
                global engagement, BITO ensures that Bihar’s contributions are
                not only recognized but celebrated worldwide.
              </p>
            </div>

            <div>
              <Button className="section-2-btn px-4 py-2">Learn More</Button>
            </div>
          </Col>
          {/* Right div for image */}
          <Col className="right-side-div mx-auto" lg={6}>
            <Image
              className="section-2-img"
              src={Section2}
              alt="section-2 img"
            />
          </Col>
        </Row>
      </Container>

      {/* Third section */}
      <div style={{ marginTop: "80px", backgroundColor: "#fffbf5" }}>
        <Container className="mb-5" style={{ marginTop: "80px" }}>
          <h1 className="text-center section-3-heading">
            Meet Our Visinory Leaders
          </h1>
          <Row className="section-2-row">
            {/* Right div for image */}
            <Col className="right-side-div" lg={6}>
              <Image
                className="section-2-img"
                src={Section3}
                alt="section-2 img"
              />
            </Col>
            {/* Left div for content */}
            <Col className="left-side-div" lg={6}>
              <h2 className="section-2-head">Chirag Paswan</h2>
              <p className="chairman">Chairman</p>
              <div className="section-para">
                <p>
                  Dear All, <br />
                  <br />
                  I extend a warm welcome to you on behalf of Bihar
                  International Trade Organization (BITO), a platform committed
                  to advancing economic prosperity and cultural heritage in
                  Bihar. At BITO, our mission revolves around shaping an
                  &quot;Atma Nirbhar Bihar&quot; and fostering positive change
                  through collaborative efforts.
                  <br />
                  <br />
                  Empowering Innovation with BITO Startup
                </p>
              </div>

              <div>
                <Button className="section-3-btn px-4 py-2">Read More</Button>
              </div>
            </Col>
          </Row>
          {/* Fouth Section */}
          {/* Prvin kumar */}
          <Row className="mt-5">
            <Col lg={6}>
              <div className="president-card">
                <div className="upper-title">
                  <Image className="img-2-president" src={PravinKumar} alt="pravin-kumar" />
                  <div className="name-div"> 
                    <h2 className="section-2-head">Pravin Kumar</h2>
                    <p className="chairman">President</p>

                  </div>
                </div>
                <p className="chairmain-inner">
                  Welcome to Bihar International Trade Organization
                </p>
                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  It is with great pride and responsibility that I address you as
                  the President of the Bihar International Trade Organisation
                  (BITO). Under leadership of Sh. Chirag Paswan , as we embark on
                  a transformative journey, BITO is set to drive significant
                  change in the social, economic, and cultural landscapes of
                  Bihar.....
                </p>
                <div>
                  <Button className="section-3-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>

            <Col lg={6}>
            <div className="president-card">
                <div className="upper-title">
                  <Image className=" img-2-president" src={Amresh} alt="amresh-ji" />
                  <div className="name-div"> 
                    <h2 className="section-2-head">Amresh</h2>
                    <p className="chairman">President</p>

                  </div>
                </div>
                <p className="chairmain-inner">
                  Welcome to Bihar International Trade Organization
                </p>
                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  It is with great pride and responsibility that I address you as
                  the President of the Bihar International Trade Organisation
                  (BITO). Under leadership of Sh. Chirag Paswan , as we embark on
                  a transformative journey, BITO is set to drive significant
                  change in the social, economic, and cultural landscapes of
                  Bihar.....
                </p>
                <div>
                  <Button className="section-3-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="w-100 mx-auto">
            <h1
              style={{
                fontSize: "25px",
                position: "relative",
                color: "#b27f4a",
                marginTop: "30px",
                fontWeight: "600",
              }}
              className="text-center"
            >
              Meet our Advisory Board
              <span
                style={{
                  position: "absolute",
                  bottom: "-10px", // Adjusts distance below the heading
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "280px", // Width of the underline
                  height: "2px", // Thickness of the underline
                  backgroundColor: "#b27f4a", // Color of the underline
                }}
              ></span>
            </h1>
          </div>
        </Container>
      </div>

      {/* Fifth Section */}
      <Container className="my-5">
        <Row style={{ background: "#422a1d" }}>
          <Col className="p-5" lg={4}>
            <div className="membership">
              <h4>Memebership</h4>
              <p>
                Membership in BITO will be open to individuals, entrepreneurs,
                industrialists, professionals, and organizations having a
                connection to Bihar and sharing the vision and values of the
                organization.
              </p>
              <div>
                <Button className="membership-btn px-4 mt-4">
                  Become A Member
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Image
              className="mw-100"
              src={MembershipImg}
              alt="membership-img"
            />
          </Col>
        </Row>
      </Container>

      {/* Sixth section Mission & Vision Section */}
      <div style={{ backgroundColor: "#422a1e" }}>
        <Container>
          <Row className="mission-vision-row" style={{ padding: "35px 0" }}>
            <Col className="mission-vision-row-col-1" lg={6}>
              <div className="vision">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Vision} alt="" />
                  <span>Vision</span>
                </div>
                <p className="text-white">
                  BITO envisions itself as a catalyst for transformation of
                  Bihar leading to a future state where Bihar stands as a global
                  leader in economic innovation, cultural heritage, and social
                  progress.
                  <br />
                  <br />
                  By empowering local industries, nurturing entrepreneurship,
                  and preserving its rich cultural legacy, BITO aims to position
                  Bihar as a dynamic and resilient community that inspires pride
                  and prosperity for generations to come.
                </p>

                <div>
                  <Button className="vision-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>

            <Col className="mx-auto mission-vision-row-col-2" lg={6}>
              <div className="mission">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Mission} alt="" />
                  <span>Mission</span>
                </div>
                <p className="text-white">
                  BITO’s mission is to catalyze economic growth and cultural
                  pride in Bihar by fostering innovation, supporting
                  entrepreneurship, and promoting global recognition of its rich
                  heritage.
                  <br />
                  <br />
                  Through strategic partnerships and community-driven
                  initiatives, BITO seeks to empower Biharis worldwide,
                  enhancing their economic opportunities and cultural identity
                  while driving positive transformation within and beyond the
                  state.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Seventh section */}

      <Container className="my-5 d-flex objective-container">
        <div className="objective-container-div">
          <h2
            style={{
              fontSize: "25px",
              position: "relative",
              color: "#b27f4a",
              marginTop: "30px",
              fontWeight: "600",
            }}
          >
            Objectives
          </h2>
          <p>
            BITO operates with a clear set of objectives that guide its
            activities and initiatives. These objectives are designed to address
            the diverse needs of the Bihari community, from economic empowerment
            to cultural preservation
          </p>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap flex-grow-1 my-4 mx-1">
              <div className="w-50 px-4 border-bottom">
                <Image src={Layer23} alt="" />
                <p>
                  <strong>Economic Empowerment</strong>
                </p>
              </div>
              <div className="w-50 px-4 pb-4 border-bottom border-start">
                <Image src={Layer24} alt="" />
                <p>
                  <strong>Cultural Preservation & Promotion</strong>
                </p>
              </div>
            </div>
            <div className="d-flex px-4 flex-wrap flex-grow-1 my-4">
              <div className="w-50">
                <Image src={Layer25} alt="" />
                <p>
                  <strong>Global Collaboration</strong>
                </p>
              </div>
              <div className="w-50 px-4 border-start">
                <Image src={Layer26} alt="" />
                <p>
                  <strong>Inclusitivity & Sustainability</strong>
                </p>
              </div>
            </div>
          </div>
          <button className="section-3-btn px-4 py-2 btn btn-primary">
            Read more
          </button>
        </div>
        <div className="w-50">
          <Image src={ObjectiveGoals} alt="" className="objective-img" />
        </div>
      </Container>

      {/* Eight section */}

      <div style={{ marginTop: "80px", backgroundColor: "#fffbf5" }}>
        <Container
          className="mb-5 py-5 text-center"
          style={{ marginTop: "80px" }}
        >
          <h1 className="text-center section-3-heading">BITO Bodies</h1>
          <p>
            BITO Arms are specialized divisions within the Bihar International
            Trade Organization that focus on different aspects of its mission
          </p>
          <div className="d-flex justify-content-center gap-5 my-5 flex-wrap">
            <div className="d-flex flex-column align-items-center px-5">
              <Image
                className="section-2-img p-3"
                src={Layer27}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Startup & <br />
                Incubation Centre <br />
                (BSIC)
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-5 border-start border-end">
              <Image
                className="section-2-img p-3"
                src={Layer28}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Bihar Asmita
                <br />
                Foundation
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-5">
              <Image
                className="section-2-img p-3"
                src={Layer29}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Industries <br />
                Association (BIA)
              </strong>
            </div>
          </div>
          <button className="section-3-btn px-4 py-2 btn btn-primary">
            Read more
          </button>
        </Container>
      </div>

      {/* ninth section */}

      <Container className="text-center my-5">
        <h1 className="text-center section-3-heading">
          Key Programs & Initiatives
        </h1>
        <p>
          BITO has launched several impactful programs and initiatives that are
          designed to address the needs of the Bihari community across various
          domains
        </p>
        <div className="d-flex justify-content-center gap-5 my-5 custom-wrap">
          <div className="d-flex flex-column align-items-center px-5">
            <Image
              className="section-2-img p-3"
              src={Layer30}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Business Connect and Collaboration</strong>
          </div>
          <div className="d-flex flex-column align-items-center px-5 border-start border-end">
            <Image
              className="section-2-img p-3"
              src={Layer31}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>
              Global Bihar Heritage and Spiritual Destination Initiative
            </strong>
          </div>
          <div className="d-flex flex-column align-items-center px-5">
            <Image
              className="section-2-img p-3"
              src={Layer33}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Bihar University</strong>
          </div>
          <div className="d-flex flex-column align-items-center px-5 border-start">
            <Image
              className="section-2-img p-3"
              src={Layer34}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>BITO Multi Specialty Hospital</strong>
          </div>
        </div>
        <button className="section-3-btn px-4 py-2 btn btn-primary">
          Read more
        </button>
      </Container>

      <div className="my-5">
        <OurPartner />
      </div>
    </>
  );
};

export default Home;
