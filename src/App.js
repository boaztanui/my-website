import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';
import Contact from './components/Contact';

function App() {
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
