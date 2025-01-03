// import styled from 'styled-components';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import ProjectContainer from './components/ProjectContainer';
// import Contact from './components/Contact';

// import Spinner from 'react-spinkit';

// function App() {
//   let loading;
//   if (loading) {
//     return (
//       <AppLoading>
//         <AppLoadingContents>
//           <img src="https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_960_720.jpg" alt="" />

//           <Spinner
//             name="ball-spin-fade-loader"
//             color="blue"
//             fadeIn="none"
//           />
//           <a href="www.boaztanui.com">www.boaztanui.com</a>
//         </AppLoadingContents>
//       </AppLoading>
//     );
//   }


//   return (
//     <AppContainer>
//       {/**Header */}
//       <Header />
//       <Hero />
//       <About />
//       <ProjectContainer />
//       <Contact />

//       {/**Salute */}
//       {/**Projects */}
//       {/**Contact/Footer */}

//     </AppContainer>
//   );
// }

// export default App;

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// `;

// const AppLoading = styled.div`
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   width: 100%;
//   background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
// `;

// const AppLoadingContents = styled.div`
//   text-align: center;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   > img {
//     height: 100px;
//     padding: 20px;
//     margin-bottom: 40px
//   }

//   > a {
//     text-decoration: none;
//     color: black;
//     margin-top: 40px
//   }
// `;

import React, { useState, useEffect } from "react";

const UnderConstruction = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-12-31T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setCountdown("We're Live!");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Website Under Construction</h1>
        <p style={styles.paragraph}>We are working hard to bring you a better experience. Stay tuned!</p>
        <div style={styles.countdown}>{countdown}</div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(45deg, #9af8ff, #fad0c4)",
    color: "#333",
    textAlign: "center",
  },
  container: {
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  countdown: {
    fontSize: "2rem",
    color: "#ff6f61",
  },
};

export default UnderConstruction;

