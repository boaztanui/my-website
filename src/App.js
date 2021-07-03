import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/img/Hero';
import About from './components/Stack';

function App() {
  return (
    <AppContainer>
      {/**Header */}
      <Header />
      <Hero />
      <About />

      {/**Salute */}
      {/**Projects */}
      {/**Contact/Footer */}

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  
`;
