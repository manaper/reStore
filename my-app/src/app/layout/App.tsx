import {  CssBaseline,Container, Typography, createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
  const [darkMode, setdarMode] = useState(false);
  const palleteType = darkMode ? 'dark':'light'; 

  const theme = createTheme({
    palette: {
    mode : palleteType,
    background:{
      default: palleteType === 'light' ? '#eaeaea': '#121212'
    }
  }
})

function HandleMode(){
  setdarMode(!darkMode);
}

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Header darkMode={darkMode} HandleMode={HandleMode} />
      <Container> 
        <Catalog/>
      </Container>

    </ThemeProvider>
  );
}

export default App;
