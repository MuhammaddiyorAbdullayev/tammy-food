import React from 'react'
import { BigsFooter, Email,Phone1, Footer1, Phone, PhoneFooter, SmallFooter, BigLetter, Icons, Input, Send, Copy } from './styleF'
import EmailIcon from '../../Assets/footer/email.png'
import PhoneIcon from '../../Assets/footer/Call.png'
import Vectr from '../../Assets/footer/Vector.png'
import {Facebook, Instagram, Twitter, YouTube,} from '@mui/icons-material'
import SendSharpIcon from '@mui/icons-material/SendSharp';
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
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                    <YouTube/>
                </Icons>
            </Footer1>
            <Footer1>
                <BigLetter>
                    <h2>QUICK LINK</h2>
                </BigLetter>
                <h3>About Us</h3>
                <h3>Menu</h3>
                <h3>Blog</h3>
                <h3>Contact Us</h3>
            </Footer1>
            <Footer1>
                <BigLetter>
                    <h2>News Letter</h2>
                </BigLetter>
                <p>Subscribe our newsletter to get our latest
                update & news</p>
                <Input>
                    <input type="text" placeholder='Your email address' />
                    <Send>
                        <SendSharpIcon/>
                    </Send>
                </Input>
            </Footer1>
        </SmallFooter>
        <Copy>
            <p> <img src={Vectr} alt="" /> Copyright 2021 .Tammy Food. All Right Reserved.</p>
        </Copy>
    </BigsFooter>
    </>
  )
}

export default Footer