/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'

const GlobalPresenceSlider = () => {
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-center global-presence-head'>Our Global Presence</h1>
                </div>

            </Container>
            <div className="general-container my-5">
                <input className="radio" type="radio" name="card" id="cardUno"  />
                <label className="content" htmlFor="cardUno">
                    <h1 className="title-card">
                        <span className="marg-bott">SINGAPORE</span>
                    </h1>
                </label>

                <input className="radio" type="radio" name="card" id="cardDos" />
                <label className="content" htmlFor="cardDos">
                    <h1 className="title-card">
                        <span className="marg-bott">SYDNEY</span>
                    </h1>
                </label>

                <input className="radio" type="radio" name="card" id="cardTres" />
                <label className="content" htmlFor="cardTres">
                    <h1 className="title-card">
                        <span className="marg-bott">TOKYO</span>
                    </h1>
                </label>

                <input className="radio" type="radio" name="card" id="cardCuatro" />
                <label className="content" htmlFor="cardCuatro">
                    <h1 className="title-card">
                        <span className="marg-bott">NEW YORK</span>
                    </h1>
                </label>

                <input className="radio" type="radio" name="card" id="cardAus" />
                <label className="content" htmlFor="cardAus">
                    <h1 className="title-card">
                        <span className="marg-bott">DUBAI</span>
                    </h1>
                </label>

                <input className="radio" type="radio" name="card" id="cardUk" checked />
                <label className="content" htmlFor="cardUk">
                    <h1 className="title-card">
                        <span className="marg-bott">LONDON</span>
                    </h1>
                </label>
            </div>


        </>
    )
}

export default GlobalPresenceSlider