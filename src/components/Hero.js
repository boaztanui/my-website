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
                <Button variant="contained" color="primary">Get In Touch</Button>
            </HeroLeft>



            <HeroRight>
                <img src={DevImg} alt="" />
            </HeroRight>

        </HeroContainer>
    )
}

export default Hero;

const HeroContainer = styled.div`
    margin:9rem 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const HeroLeft = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > h1 {
            font-weight: 900;
            font-size: 6.2rem;
        }

         > h2 {
            font-size: 4.2rem;
            font-weight: 700;
         }

        > p {
            font-weight: 500; 
        };

        > Button {
            align-self: flex-start;
            margin-top: 3rem;
            font-size: 1.1rem;
        }
`;

const HeroRight = styled.div`
    > img {
        height: 50vh;
        width: 50vw;
    };
`;
