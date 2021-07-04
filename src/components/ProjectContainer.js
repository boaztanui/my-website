import React from 'react'
import styled from 'styled-components';
import Projects from './Projects';
import NetflixClone from './img/projecss/netflix-cloneA.png';
import CrownClothing from './img/projecss/crownclothing.PNG';
import Portfolio from './img/projecss/portfolio.PNG';
import SlackClone from './img/projecss/slack.PNG';
import TeslaClone from './img/projecss/tesla.PNG';
import TinderClone from './img/projecss/tinder-app.png';

function ProjectContainer() {

    return (
        <ProjectContainerContainer id='projects'>

            <ProjectHeader>
                <h3> Some Noteworthy Projects I Have Build</h3>
            </ProjectHeader>

            <ProjectBox>
                <Projects
                    github='https://github.com/boaztanui/netflix-clone'
                    liveLink='https://netflix-clone-8d40d.web.app/'
                    img={NetflixClone}
                    header='Netflix Clone'
                    content='This project was all about fetching data from an API using React Hooks and displaying the movies in a UI same as Netflix.  I used Styled components for styling, utilised material UI for icons, React-router and delopyed it to production on Firebase'
                    fullStack={['React', 'React-Router', 'Material-UI', 'Firebase',]}
                />
                <Projects
                    github='https://github.com/boaztanui/my-website'
                    liveLink='http://boaztanui.com/'
                    img={Portfolio}
                    header='Portfolio Website'
                    content='I created a React app to showcase my work and skills.  I used React Components to divide each section into single components. I used Syled components for tyling this App. I also delpoyed it on firebase'
                    fullStack={['React', 'Styled Components', 'React-Router']}
                />
                <Projects
                    github='https://github.com/boaztanui/tinder-clone'
                    liveLink='https://tinder-clone-4ca20.web.app/'
                    img={TinderClone}
                    header='Tinder Clone'
                    content='This projects was build with a purpose of connecting the React frontEnd with Node Backend. I used MongoDB, Express and Node.js for the backend and storing of Data. The App had most functionalities of Tinder App'
                    fullStack={['React', 'NODE.JS', 'Express', 'React-Router']}
                />


                <Projects
                    github='https://github.com/boaztanui/slack-clone'
                    liveLink='https://slack-clone-992e5.web.app/'
                    img={SlackClone}
                    header='Slack Clone'
                    content='I created Slack clone because I liked the simplicity of their UI. Using Material UI for Icons was Amazing. Used google Auth for logIn. It has an ability for anyone to create a Group just like Slack and also comment on other groups'
                    fullStack={['Redux', 'React', 'Firebase', 'Styled Components']}
                />
                <Projects
                    github='https://github.com/boaztanui/tesla-clone'
                    liveLink='https://tesla-clone-676a7.web.app/'
                    img={TeslaClone}
                    header='Tesla Clone'
                    content='This project was about Designing the framework of Tesla using React. It was so amazing to use diffent animations in various sections of the APP I used react Hooks, Css3, Styled Components and delopyed it to production on Firebase'
                    fullStack={['React', 'Firebase', 'css3', 'React-Router']}
                />
                <Projects
                    github='https://github.com/boaztanui/crwn-clothing'
                    liveLink='https://github.com/boaztanui/crwn-clothing'
                    img={CrownClothing}
                    header='Crown Clothing App'
                    content='This was one of my largest build i created on an online bootcamp. The Goal was to design an Ecommerce website with all the functionalities working including making payments, login with google and delopyed it to production on Firebase '
                    fullStack={['React', 'Firebase', 'Scss', 'GraphQL']}
                />
            </ProjectBox>



        </ProjectContainerContainer>
    )
}

export default ProjectContainer;

const ProjectContainerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    max-width: 120rem;

`;

const ProjectHeader = styled.div`
    margin-bottom: 3rem;

    > h3 {
        font-weight: 900;
        font-size: 3.2rem;

        @media only screen and (max-width: 46.4375em) {
            font-weight: 700;
            font-size: 2.2rem;
    }

    @media only screen and (max-width: 30.25em) {
            font-weight: 900;
            font-size: 2rem;
    }
        
    }
`;

const ProjectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 46.4375em) {
        display: block;
    }


    > * {
        margin: 1rem;
        flex: 33%;

        @media only screen and (max-width: 46.4375em) {
        margin-top: 2rem;
    }
    }
`;


