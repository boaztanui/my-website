import React from 'react'
import styled from 'styled-components';

import LinkedInIcon from './img/linkedIn.png';
import EmailIcon from './img/email.png';
import GitHubIcon from './img/github.png';
import InstagramIcon from './img/instagram.png';
import { Link } from "react-router-dom";



function Contact() {

    return (
        <ContactContainer>
            <ContactContent>
                <h2>Get In Touch</h2>
                <p>
                    I am a freelance web developer. Let's talk about your next project, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            </ContactContent>

            <ContactIcons>
                <a href="https://www.linkedin.com/in/boaztanui/"><img src={LinkedInIcon} alt="" /></a>


                <a href=""><img src={EmailIcon} alt="" /></a>


                <a href="https://github.com/boaztanui"><img src={GitHubIcon} alt="" /></a>
                <a href="https://www.instagram.com/itsboaz/"><img src={InstagramIcon} alt="" /></a>

            </ContactIcons>

            <ContactFooter>
                <hr />
                <h4>Build with ❤ by Boaz Tanui👨‍💻</h4>
                <h5>Email: boaztanui058@gmail.com</h5>
            </ContactFooter>


        </ContactContainer>
    )
}

export default Contact;

const ContactContainer = styled.div`
    text-align: Center;
    max-width: 60rem;
    margin-top: 10rem;
    height: 50vh;

    
`;

const ContactContent = styled.div`
    
    > h2 {
        font-weight: 900;
        font-size: 6.2rem;
    }

    > p {
        font-weight: 500;
        margin-top: 2rem;
    }
`;

const ContactIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    > a > img {
        height: 3rem;
        margin: 1rem;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
`;


const ContactFooter = styled.div`

> hr {
    margin-top: 6rem;
}

> h4 {
    align-self: flex-end;
    margin-top: 2rem;
    font-weight: 300;
    margin-bottom: 0;
}    

> h5 {
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 6rem
} 
`;