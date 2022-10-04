import styled from "styled-components";

export const BigsFooter = styled.div`
    width: 100%;
    height: auto;
    /* border: 3px solid red; */
    background-color: #232233;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
`
export const PhoneFooter = styled.div`
    width: 80%;
    height: 200px;
    /* border: 2px solid blue; */
    margin-top: -100px;
    margin-bottom: 30px;
    border-radius: 30px;
    background-color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    -webkit-box-shadow: 0px -35px 100px -18px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px -35px 100px -18px rgba(34, 60, 80, 0.2);
    box-shadow: 0px -35px 100px -18px rgba(34, 60, 80, 0.2);
`
export const Email = styled.div`
    width: 50%;
    height: auto;
    /* border: 2px solid #E6E6E6; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: none;
    border-top: none;
    img{
        width: 80px;
        height: 80px;
        @media screen and (max-width:1284px){
        height: 80px;
        width: 80px;
        font-size: 10px;
    }
    }
    @media screen and (max-width:1284px){
        height: 80px;
        width: 45%;
        font-size: 10px;
    }
`
export const Phone = styled.div`
    width: 35%;
    height: auto;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Phone1 = styled.div`
    width: 40%;
    height: auto;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SmallFooter = styled.div`
    width: 80%;
    height: auto;
    /* border: 3px solid white; */
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Footer1 = styled.div`
    width: 32%;
    height: 230px;
    /* border: 3px solid yellow; */
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    color: #fff;
    
`
export const BigLetter = styled.div`
    width: 100%;
    height: auto;
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span{
        color: #FCC647;
    }
`
export const Icons = styled.div`
    width: 50%;
    height: 30px;
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img{
        color: white;
    }
`
export const Input = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background-color:#FEB918;
    border: none;
    border-radius: 4px;
    input{
        width: 85%;
        height: 40px;
        border: none;
        border-radius: 4px;
    }

`
export const Send = styled.div`
    color:#fff;
    width: 30px;
    font-size: 30px;
    margin-left: 20px;
    border-radius: 4px;
`
export const Copy = styled.div`
    width: 80%;
    height: 50px;
    /* border: 1px solid #fff; */
    border-bottom:none ;
    border-left: none;
    border-right: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
`