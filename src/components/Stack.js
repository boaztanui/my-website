import React from 'react';
import styled from 'styled-components';
import CardBox from './CardBox';

import Frontend from './img/frontend.svg';
import Backend from './img/backend.svg';
import Database from './img/dataB.svg';

import ReactIcon from './img/react.svg';
import MongoDB from './img/mongoDB.svg';
import JSIcon from './img/js.svg';
import NodeIcon from './img/nodejs.svg';
import HtmlIcon from './img/html.svg';
import CssIcon from './img/css.svg';
import FirebaseIcon from './img/firebase.svg';




function Stack() {
    return (
        <StackContainer>
            <StackContent>
                <h3>My Skills & Technologies</h3>
                <p>Building fast loading websites, responsive in all devices </p>
            </StackContent>

            <StackCards>
                <CardBox
                    icon={Frontend}
                    header="Front End Development"
                    content="
                    For the front-end, I use HTMl5, CSS3, SCSS, styled compontents, Javascript and React.Js framework. I may also use Next.Js for the frontend framwork. 
                    "
                />

                <CardBox
                    icon={Backend}
                    header="Backend Development"
                    content="
                    I Develop my backend using Javascript's NODE.js, MongoDB, Express and firebase"
                />

                <CardBox
                    icon={Database}
                    header="Database"
                    content="I use MongoDB and firebase for my backend storage"
                />
            </StackCards>

            <StackImgBox>
                <img src={ReactIcon} alt="" />
                <img src={MongoDB} alt="" />
                <img src={JSIcon} alt="" />
                <img src={NodeIcon} alt="" />
                <img src={HtmlIcon} alt="" />
                <img src={CssIcon} alt="" />
                <img src={FirebaseIcon} alt="" />
            </StackImgBox>

        </StackContainer>
    )
}

export default Stack;

const StackContainer = styled.div`
    margin-top: 15rem;
    height: 100vh;  

`;

const StackContent = styled.div`
    text-align: center;

    > h3 {
        font-weight: 900;
        font-size: 3.2rem
        
    }

    > p {
        margin-top: 2rem;
        font-weight: 400;
    }
`;

const StackCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > :not(:last-child) {
        margin-right: 1rem;
    };
`;

const StackImgBox = styled.div`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    opacity: .8;
    overflow: hidden;
    

    > img {
        height: 100%;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }
`;



