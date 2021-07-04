import React from 'react'
import styled from 'styled-components';
import MyAboutImg from './img/dev-3.svg'

function About() {
    return (
        <AboutContainer>
            <AboutHeader>
                <h1>About Me</h1>
                <hr />
            </AboutHeader>

            <AboutBox>
                <AboutContent>
                    <p>Hi, I'm Boaz! A front-end web developer and teacher with a great passion for building things with code. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between. My objective as a developer is to deliver to the best in each moment or situation. </p>
                    <br />
                    <p>I’m a disciplined, self-motivated, hardworking, enthusiastic, and responsible person with high interpersonal and organizational skills. I have a passion for excellence, commitment, and the ability to work under minimum supervision to meet deadlines. I also have great ownership of work with a belief that through hard work, departmental/organizational objectives can be realized. I am also a visionary team player, confident and ambitious in my work.</p>
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
    height: 95vh;
    width: 95vw;
    margin-left: 4rem;
    margin-right: 4rem;
    overflow: hidden;
    
`;

const AboutHeader = styled.div`
    display: flex;
    align-items: center;
    width: 95vw;
    margin-left: 6rem;

    
>h1{
    margin-bottom: 3rem;
    
}

> hr {
    transform: rotate(90deg);
    margin-left: 8rem;
    margin-bottom: 2.5rem;
    height: 14rem;
    background-color: blue;
}

`;

const AboutBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const AboutContent = styled.div`
    flex: 0.5;
`;

const AboutImg = styled.div`
    flex:0.4;
> img {
    
    width: 100%;
}
`;


