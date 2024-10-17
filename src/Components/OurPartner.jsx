/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'


const Partners = ['BITO Japan', 'BITO USA', 'BITO Singapore', 'Shri Mahaveer Shikshan Sansthanam', 'Bihar Jharkhand Association of North America', 'Sukhi Parivar Foundation']

const OurPartner = () => {
    return (
        <>

            <Container>
                <Col lg={12}>
                    <h4 className='text-center my-5 our-partner-head'>Our Partners</h4>
                </Col>

                <div className='mx-auto partner-div'>
                    {
                        Partners.map((item,index) => (
                            <Button className='partner-btn' key={index}>{item}</Button>
                        ))
                    }
                </div>

            </Container>



        </>
    )
}

export default OurPartner