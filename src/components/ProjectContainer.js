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
        <ProjectContainerContainer>

            <ProjectHeader>
                <h3> Some Noteworthy Projects I Have Build</h3>
            </ProjectHeader>

            <ProjectBox>
                <Projects
                    github='https://github.com/boaztanui/netflix-clone'
                    liveLink='https://netflix-clone-8d40d.web.app/'
                    img={NetflixClone}
                    header='Netflix Clone'
                    content=''
                />
                <Projects
                    github='https://github.com/boaztanui/my-website'
                    liveLink='http://boaztanui.com/'
                    img={Portfolio}
                    header='Portfolio Website'
                    content=''
                />
                <Projects
                    github='https://github.com/boaztanui/tinder-clone'
                    liveLink='https://tinder-clone-4ca20.web.app/'
                    img={TinderClone}
                    header='Tinder Clone'
                    content=''
                />
            </ProjectBox>
            <ProjectBox>
                <Projects
                    github='https://github.com/boaztanui/slack-clone'
                    liveLink='https://slack-clone-992e5.web.app/'
                    img={SlackClone}
                    header='Slack Clone'
                    content=''
                />
                <Projects
                    github='https://github.com/boaztanui/tesla-clone'
                    liveLink='https://tesla-clone-676a7.web.app/'
                    img={TeslaClone}
                    header='Tesla Clone'
                    content=''
                />
                <Projects
                    github='https://github.com/boaztanui/crwn-clothing'
                    liveLink='https://github.com/boaztanui/crwn-clothing'
                    img={CrownClothing}
                    header='Crown Clothing App'
                    content=''
                    stack={['React', 'Firebase', 'Scss', 'React-Router']}
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

`;

const ProjectHeader = styled.div`
    margin-bottom: 3rem;

    > h3 {
        font-weight: 900;
        font-size: 3.2rem
        
    }
`;

const ProjectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin: 10px;
        flex: 33%;
    }
`;


