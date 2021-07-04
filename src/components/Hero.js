import React from 'react';
import { Button } from '@material-ui/core';

import styled from 'styled-components';
import DevImg from './img/dev-1.svg';



function Hero() {
    return (
        <HeroContainer>
            <HeroLeft>
                <h1>Boaz Tanui.</h1>
                <h2>I build things for the web.</h2>
                <p>I'm a software engineer specialising in building (and occasionally designing) exceptional websites, applications, and everything in between. I use MERN (MongoDB, Express.js, React.js & Node.js) stack.</p>
                <a href={'#contact'}><Button variant="contained" color="primary">Get In Touch</Button> </a>
            </HeroLeft>



            <HeroRight>
                <img src={DevImg} alt="" />
            </HeroRight>

        </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
    max-width: 120rem;
    margin:9rem 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media only screen and (max-width: 72.5em) {
                margin:7rem 7rem;
        }

        @media only screen and (max-width: 48.75em) {
               display: block;
         }

         @media only screen and (max-width: 48.75em) {
            margin: 7rem 3rem;
         }

        
`;

const HeroLeft = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;

        @media only screen and (max-width: 48.75em) {
                width: 80%;
                font-size: 4.2rem;
    
         }

         @media only screen and (max-width: 48.75em) {
            width: 100%;
        }

        > h1 {
            font-weight: 900;
            font-size: 6.2rem;

            @media only screen and (max-width: 77.5em) {
                font-size: 5.2rem;
            }

            @media only screen and (max-width: 63.4375em) {
                font-size: 4.2rem;
            }
        }

         > h2 {
            font-size: 4.2rem;
            font-weight: 700;

            @media only screen and (max-width: 77.5em) {
                font-size: 3.2rem;
            }

            @media only screen and (max-width: 63.4375em) {
                font-size: 2.2rem;
            }
         }

        > p {
            font-weight: 500;

            @media only screen and (max-width: 63.4375em) {
                font-size: 1.4rem;
            } 

            @media only screen and (max-width: 48.75em) {
               font-size:1.6rem;
         }
        };

        a > {
            text-decoration: none;
        }

        a > Button {
            align-self: flex-start;
            margin-top: 3rem;
            font-size: 1.1rem;
        }
`;

const HeroRight = styled.div`
        width: 50%;

        @media only screen and (max-width: 48.75em) {
                display: block;
                width: 100%;
                margin-top: 2rem;
            } 

    > img {
        width: 100%;
        height: auto;

        
    }

        @media only screen and (max-width: 63.4375em) {
                flex: 50%;
            }
        

`;
