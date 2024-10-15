/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import RightArrow from '../assets/white-right-arrow.png'

const MembershipCTA = () => {
    return (
        <>
            <div style={{
                backgroundColor: '#422a1d'
            }}>
                <Container>
                    <Row style={{ padding: '50px 0' }}>
                        <Col lg={6}>
                            <div className='membership-cta'>
                                <span className='text-white' style={{ fontWeight: '700' }}>Membership in BITO</span>
                                <p className='text-white'>will be open to individuals, entrepreneurs, industrialists,
                                    professionals, and organizations with ties to Bihar.</p>
                            </div>
                        </Col>





                        <Col className='membership-right-cta-div' lg={6}>
                            <div> 
                                <Button className='enroll-now-btn'> Enroll Now


                                <Image style={{ marginTop: '4px' }} src={RightArrow} alt='right-arrow' />
                                </Button>
                               
                            </div>

                        </Col>
                    </Row>

                </Container>
            </div>

        </>
    )
}

export default MembershipCTA