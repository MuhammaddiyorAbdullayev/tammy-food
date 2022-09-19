import React, { useRef, useState } from 'react'
import { Brand, CloseBtn, Container, LinkDiv, Menu, MenuWrapper, Wrapper } from './style'
import Logo from '../../Assets/Logo.png'

const Navbar = () => {

  const [color, setcolor] = useState('home')

  const menu = useRef()

  const openMenu = ()=>{
    menu.current.style.right = "0"
  }

  const closeMenu = ()=>{
    menu.current.style.right = "-100%"
  }

  return (
    <Wrapper>
      <Container>
        <Brand onClick={()=>setcolor('home')} src={Logo} />
        <LinkDiv>
          <h2
          style={{color:color=='home'?'#FCC647':'#3C3C3C'}}
          onClick={()=>setcolor('home')}
          >Home</h2>
          <h2
          style={{color:color=='about'?'#FCC647':'#3C3C3C'}}
          onClick={()=>setcolor('about')}         
          >About us</h2>
          <h2
          style={{color:color=='menu'?'#FCC647':'#3C3C3C'}}
          onClick={()=>setcolor('menu')}         
          >Menu</h2>
          <h2
          style={{color:color=='blog'?'#FCC647':'#3C3C3C'}}
          onClick={()=>setcolor('blog')}         
          >Blog</h2>
          <h2
          style={{color:color=='contact'?'#FCC647':'#3C3C3C'}}
          onClick={()=>setcolor('contact')}          
          >Contact us</h2>
        </LinkDiv>
        <MenuWrapper ref={menu}>
          <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
          <h2>Home</h2>
          <h2>About us</h2>
          <h2>Menu</h2>
          <h2>Blog</h2>
          <h2>Contact us</h2>
        </MenuWrapper>
        <Menu onClick={openMenu}/>
      </Container>
    </Wrapper>
  )
}

export default Navbar