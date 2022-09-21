import React from 'react'
import { Card, Container, Infos, Titles } from './style'

// icons

import Letter from '../../Assets/About/letter.svg'
import Money from '../../Assets/About/money.svg'
import Van from '../../Assets/About/van.svg'

const About = () => {
    
  return (
    <Container>
        <Titles>
            <h1>How it works</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry
            </p>
        </Titles>
        <Infos>
            <Card>
                <div className='blue'>
                    <img src={Letter} alt="" />
                </div>
                <h2>Order Now</h2>
                <p>
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry
                </p>
            </Card>
            <Card>
                <div className='yellow'>
                    <img src={Van} alt="" />
                </div>
                <h2>Get Delivery</h2>
                <p>
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry
                </p>
            </Card>
            <Card>
                <div className='green'>
                    <img src={Money} alt="" />
                </div>
                <h2>Payment</h2>
                <p>
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry
                </p>
            </Card>
        </Infos>
    </Container>
  )
}

export default About