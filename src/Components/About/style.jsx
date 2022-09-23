import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    
    @media (max-width:760px) {
        margin-bottom: 100px;
    }
`

export const Titles = styled.div`
    width: 100%;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 48px;
        color: #3C3C3C;
        margin-bottom: 30px;
    }

    p{
        max-width: 505px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 27px;
        text-align: center;
        color: #667085;
    }

    @media (max-width:540px) {
        height: 350px;
        h1{
            font-size: 30px;
        }
        p{
            max-width: 80%;
        }
    }
`

export const Infos = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width:760px) {
        flex-wrap: wrap;
        margin-bottom: 100px;
        height: 800px;
    }
`

export const Card = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 10px;
    border-radius: 20px;
    transition: all ease 0.3s;

    &:hover{
        box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 0.08);
    }

    div{
        width: 88px;
        height: 88px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 39px;
        border-radius: 50%;

        img{
            width: 42px;
            height: 42px;
            object-fit: contain;
        }
    }

    // colors of icons

    .blue{
        background-color: #335DFF;
    }

    .yellow{
        background-color: #F6CA00;
    }

    .green{
        background-color: #0BD28E;
    }

    // texts

    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #3C3C3C;
        margin-bottom: 20px;
    }

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 27px;
        text-align: center;
        color: #667085;
    }

    @media (max-width:950px) {
        width: 250px;
        h2{
            font-size: 17px;
        }
        p{
            font-size: 12px;
        }
    }

    @media (max-width:760px) {
        margin: 20px 10px;
    }

    @media (max-width:540px) {
        width: 80%;
        box-shadow: 0px 0px 31px 2px rgba(0, 0, 0, 0.08);
        h2{
            font-size: 20px;
        }
        p{
            font-size: 15px;
        }
    }
`
