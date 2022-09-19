import React from 'react'
import { Background, BtnDiv, Container, Info, MiniTitle, Paragraph, Title } from './style'
import Play from '../../Assets/Play.svg'

const Entery = () => {
  
  return (
    <Container>
      <Info>
        <MiniTitle>Fast Delivery</MiniTitle>
        <Title>Discover Your Favourite Food and </Title>
        <Paragraph>
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s.
        </Paragraph>
        <BtnDiv>
          <button id='start-btn'>Get Started</button>
          <div id='btn-div'>
            <div>
              <img src={Play} alt="" />
            </div>
            <button>More Information</button>
          </div>
        </BtnDiv>
      </Info>
    </Container>
  )
}

export default Entery