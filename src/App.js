import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';
import Contact from './components/Contact';

import Spinner from 'react-spinkit';

function App() {
  let loading;
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_960_720.jpg" alt="" />

          <Spinner
            name="ball-spin-fade-loader"
            color="blue"
            fadeIn="none"
          />
          <a href="www.boaztanui.com">www.boaztanui.com</a>
        </AppLoadingContents>
      </AppLoading>
    );
  }


  return (
    <AppContainer>
      {/**Header */}
      <Header />
      <Hero />
      <About />
      <ProjectContainer />
      <Contact />

      {/**Salute */}
      {/**Projects */}
      {/**Contact/Footer */}

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px
  }

  > a {
    text-decoration: none;
    color: black;
    margin-top: 40px
  }
`;

