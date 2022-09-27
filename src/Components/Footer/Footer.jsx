import React from 'react'
import { BigsFooter, Email,Phone1, Footer1, Phone, PhoneFooter, SmallFooter, BigLetter, Icons } from './styleF'
import EmailIcon from '../../Assets/footer/email.png'
import PhoneIcon from '../../Assets/footer/Call.png'
import { Facebook,Twitter,YouTube,Instagram } from '@mui/icons-material'
const Footer = () => {
  return (
    <>
    <BigsFooter>
        <PhoneFooter>
            <Email>
                <img src={EmailIcon} alt="" />
                <Phone1>
                <h3>info@youremail.com</h3>
                </Phone1>
            </Email>
            <Email>
                    <img src={PhoneIcon} alt="" />
                <Phone>
                    <h3>+880 321 655 9985</h3>
                </Phone>
            </Email>
        </PhoneFooter>
        <SmallFooter>
            <Footer1>
                <BigLetter>
                <h2>Tammy <span>Food</span></h2>
                </BigLetter>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <Icons>
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={YouTube} alt="" />
                </Icons>
            </Footer1>
            <Footer1>
    
            </Footer1>
            <Footer1>

            </Footer1>
        </SmallFooter>
    </BigsFooter>
    </>
  )
}

export default Footer