import styled from 'styled-components'

import Image from '../../Assets/Background.png'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    border: 1px solid red;
`

// Info side

export const Info = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-position: right;
    @media (max-width:1140px) {
        background-size: 60%;
    }
    @media (max-width:768px) {
        align-items: center;
        background-image: none;
    }
`

export const MiniTitle = styled.h3`
    font-weight: 600;
    font-size: 16.625px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 30px;
    color: #F4B41B;
    background: #FFF2D5;
    border-radius: 6px;
    padding: 11px 21px;
    @media (max-width:768px) {
        margin-left: 0;
        font-size: 13px;
    }
`

export const Title = styled.h1`
    max-width: 600px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    color: #3C3C3C;
    margin-left: 30px;
    &::after{
        content: 'Test Forever';
        color: #F4B41B;
    }
    @media (max-width:768px) {
        text-align: center;
        font-size: 35px;
        margin-left: 0;
    }
`

export const Paragraph = styled.p`
    max-width: 500px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #667085;
    margin-left: 30px;
    @media (max-width:768px) {
        text-align: center;
        font-size: 13px;
        margin-left: 0;
    }
`

export const BtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 30px;

    #start-btn{
        width: 140px;
        height: 52px;
        font-style: normal;
        font-weight: 500;
        border: none;
        cursor: pointer;
        border: 1px solid #FFC12F;
        font-size: 19px;
        line-height: 23px;
        color: #FFFFFF;
        background: #FFC12F;
        box-shadow: 0px 15px 40px rgba(249, 213, 128, 0.25);
        border-radius: 48px;
        margin-right: 40px;
        transition: all ease 0.3s;
        &:hover{
            background-color: rgb(0,0,0,0);
            color: #FFC12F;
        }
        @media (max-width:768px) {
            width: 110px;
            height: 35px;
            font-size: 15px;
        }
    }
    
    #btn-div{
        height: 52px;
        padding: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all ease 0.3s;
        border-radius: 48px;
        &:hover{
            background-color: #e6e6e6;
        }
        &:hover div{
            width: 40px;
            opacity: 1;
        }
        div{
            width: 0px;
            height: 40px;
            box-shadow: 0px 0px 20px rgba(199, 199, 199, 0.25);
            display: flex;
            opacity: 0;
            overflow: hidden;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            transition: all ease 0.3s;
            border-radius: 50%;
            img{
                width: 24px;
                height: 24px;
                object-fit: contain;
            }
            @media (max-width:768px) {
                height: 20px;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
        }
        button{
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 32px;
            color: #3C3C3C;
            cursor: pointer;
            border: none;
            background-color: rgb(0,0,0,0);
            @media (max-width:768px) {
                font-size: 15px;
            }
        }
        @media (max-width:768px) {
            height: 35px;
        }
    }
    @media (max-width:768px) {
        margin-left: 0;
    }
`
