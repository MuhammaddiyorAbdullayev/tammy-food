import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #FFFBF3;
    z-index: 99;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 80px;
    background-color: rgb(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Brand = styled.img`
    width: 199px;
    height: 39px;
    object-fit: contain;
    margin-left: 30px;
    cursor: pointer;

    @media (max-width:425px){
        width: 160px;
        height: 30px;
    }
`

export const LinkDiv = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: #3C3C3C;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            opacity: 0.7;
        }
    }
    @media (max-width:1050px) {
        display: none;
    }
`

// Menu styles

export const MenuWrapper = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: -100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    background-color: #4d4c4c;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    h2{
        font-size: 25px;
        color: #FCC647;
        display: block;
        transition: 0.3s;
        margin: 20px 20px;
        cursor: pointer;
    }
`

export const Menu = styled(MenuIcon)`
    width: 35px !important;
    height: 35px !important;
    object-fit: contain !important;
    color: #070707 !important;
    display: none !important;
    margin-right: 30px !important;
    @media (max-width:1050px) {
        display: block !important;
    }
`

export const CloseBtn = styled.h3`
    padding: 8px 8px 8px 32px;
    font-size: 25px;
    color: #818181;
    display: block; 
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    &:hover{
        color: #f1f1f1;
    }
`
