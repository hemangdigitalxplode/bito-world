/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook-logo.png";
import Instagram from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container style={{ padding: "40px 0" }}>
          <Row>
            <Col lg={2}>
              <Image
                className="footer-logo"
                src={FooterLogo}
                alt="footer-logo"
              />
            </Col>

            <Col style={{ width: "80%" }} lg={10}>
              <p style={{ paddingTop: "40px" }}>
                Welcome to BITO, your partner in discovering the vibrant history
                and promising future of Bihar. Our organization is dedicated to
                preserving Bihar&apos;s cultural heritage while simultaneously
                creating new opportunities for education, employment, and
                economic growth.
              </p>

              <p>
                Bihar International Trade Organization (BITO) Preserving
                Heritage, Creating Opportunities Explore the rich tapestry of
                Bihar&apos;s history and culture, where the past meets the
                future. BITO is your gateway to a rejuvenated Bihar, dedicated
                to preserving its heritage while paving the way for progress.
              </p>
            </Col>
          </Row>
          {/* Second section in Footer */}
          <Row style={{ padding: "50px 0" }}>
            <Col style={{ width: "31%" }} lg={3}>
              <div className="address-div">
                <span>Address:</span>
                <p className="address-para">
                  173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic
                  City Metro Station, Noida-201309 Phone: 0120-4914498
                </p>

                <p className="email">
                  {" "}
                  <span>Email:</span>office@bitoworld.in
                </p>
              </div>
            </Col>

            <Col
              style={{ width: "12%" }}
              className="quick-links-container"
              lg={3}
            >
              <div className="quick-links">
                <p>Quick Links</p>
                <li>Home</li>
                <li>About</li>
                <li>Our Work</li>
                <li>Chapter</li>
                <li>Bihar Voice</li>
              </div>
            </Col>

            <Col
              className="quick-links-container-2"
              style={{ width: "13%" }}
              lg={3}
            >
              <div className="quick-links-2">
                <li>EOI for BIA</li>
                <li>BSIC</li>
                <li>Events</li>
                <li>Media</li>
                <li>Job</li>
                <li>Contact</li>
                <li>Membership</li>
              </div>
            </Col>

            <Col className="mx-auto" style={{ width: "44%" }} lg={3}>
              <div className="newsletter-div">
                <p>Newsletter</p>
                <div
                  style={{ gap: "6px" }}
                  className="news-email-contact d-flex align-items-center"
                >
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Button className="subs-btn">Subscribe</Button>
                </div>

                <div className="social-footer">
                  <p>Social Links</p>

                  <div className="social-icons d-flex align-items-center">
                    <Link>
                      <Image
                        src={Facebook}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Instagram}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Linkedin}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Twitter}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Youtube}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Third Row */}
          <Container>
            <Col lg={12}>
              <p className="footer-last-line text-center">
                Copyright © 2023 Bihar International Trade Organization (BITO)
              </p>
            </Col>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Footer;
