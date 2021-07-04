import React from 'react'
import styled from 'styled-components';
import MyAboutImg from './img/dev-3.svg'

import AngularIcon from './img/icons/angular-icon.svg';
import CssIcon from './img/icons/css.svg';
import Djangoproject from './img/icons/djangoproject-icon.svg';
import ExpressJs from './img/icons/expressjs-icon.svg';
import FirebaseIcon from './img/icons/firebase.svg';
import GitIcon from './img/icons/git-scm-icon.svg';
import GraphQ from './img/icons/graphql-icon.svg';
import HtmlIcon from './img/icons/html.svg';
import JSIcon from './img/icons/js.svg';
import MongoDB from './img/icons/mongodb-icon.svg';
import NetlifyIcon from './img/icons/netlify-icon.svg';
import NodeIcon from './img/icons/nodejs-icon.svg';
import PyIcon from './img/icons/python-icon.svg';
import ReactIcon from './img/icons/react.svg';
import ReduxIcon from './img/icons/redux.svg';


function About() {
    return (
        <AboutContainer >
            <AboutHeader id='about'>
                <h1>About Me</h1>
            </AboutHeader>

            <AboutBox>
                <AboutContent>
                    <p>Hi, I'm Boaz! A front-end web developer and teacher with a great passion for building things with code. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between. My objective as a developer is to deliver to the best in each moment or situation. </p>
                    <br />
                    <h3 id='about'>My Stack</h3>
                    <ul>
                        <li>Programming  &gt;  Javascript, Node.js, Python</li>
                        <li>Frontend &gt;  React, NextJS, Redux, WebPack, HTML, CSS, SCSS </li>
                        <li>Backend &gt; Express with Node.JS</li>
                        <li>Database &gt; MongoDB</li>
                    </ul>

                    <StackImgBox>
                        <StackImageOne>
                            <img src={ReactIcon} alt="" />
                            <img src={MongoDB} alt="" />
                            <img src={JSIcon} alt="" />
                            <img src={NodeIcon} alt="" />
                            <img src={HtmlIcon} alt="" />
                            <img src={ExpressJs} alt="" />
                            <img src={GitIcon} alt="" />
                            <img src={GraphQ} alt="" />
                            <img src={FirebaseIcon} alt="" />

                        </StackImageOne>

                        <StackImageTwo>
                            <img src={CssIcon} alt="" />

                            <img src={NetlifyIcon} alt="" />
                            <img src={PyIcon} alt="" />
                            <img src={ReduxIcon} alt="" />
                            <img src={AngularIcon} alt="" />
                            <img src={Djangoproject} alt="" />
                        </StackImageTwo>
                    </StackImgBox>
                </AboutContent>

                <AboutImg>
                    <img src={MyAboutImg} alt="" />
                </AboutImg>
            </AboutBox>


        </AboutContainer>
    )
}

export default About;


const AboutContainer = styled.div`
    margin:6rem 6rem;
    max-width: 120rem;

    @media only screen and (max-width: 48.75em) {
            margin: 4rem 3rem;
         }
    
`;

const AboutHeader = styled.div`
>h1{
    margin-bottom: 3rem;
    
}

`;

const AboutBox = styled.div`
    width: 100%;
    display: flex;
    @media only screen and (max-width: 63.4375em) {
        font-size: 1.4rem;
     } 

    @media only screen and (max-width: 48.75em) {
        display: block;
    }
`;

const AboutContent = styled.div`
 width: 50%;
    display: flex;
    flex-direction:column;

    @media only screen and (max-width: 48.75em) {
        width: 80%;
        font-size: 1.6rem;
    }

    @media only screen and (max-width: 42.125em) {
        width: 100%;
    }

    > ul {
        list-style: none;
        font-weight: 400;

        @media only screen and (max-width: 55.5625em) {
                font-size: 1.2rem;
            } 

            @media only screen and (max-width: 48.75em) {
                font-size: 1.6rem;
            }
    }
`;

const AboutImg = styled.div`
    width: 100%;
    margin-top: 1.5rem;

    > img {
        width: 100%;
        height: auto;
    }
`;


const StackImgBox = styled.div`
    height: 6rem;
    margin-top: 6rem;

    @media only screen and (max-width: 48.75em) {
        display: none;
    }
`;

const StackImageOne = styled.div`
    display: flex;
    
    > img {
        height: 4rem;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
    }
`;

const StackImageTwo = styled.div`
    margin-top: 2rem;

   > img {
        height: 4rem;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    }
`;

