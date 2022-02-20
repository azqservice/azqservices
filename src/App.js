import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from 'Styles/Global.styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from "styled-components";
import theme from 'Styles/Theme';
import { Home } from 'Components/Home/Home';
import { Header } from 'Components/Header/Header';
import { Cleaning } from 'Components/Cleaning/Cleaning';
import { Contact } from 'Components/Contact/Contact';
import { Footer } from 'Components/Footer/Footer';
import { Scrap } from "Components/Scrap/Scrap";


function App() {

  const [footer, setFooter] = React.useState(true);

  const location = useLocation();

  useEffect(() => {

    if (location.pathname === '/') {
      setFooter(false);
    }
    else {
      setFooter(true);
    }

  }, [location]);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scrap" element={<Scrap />} />
          </Routes>
          {footer && <Footer />}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
