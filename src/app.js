import React from "react";
import Container from "./Container";
import {AppProvider} from "./context";

const App=()=>{
    return(
  
        <AppProvider>
          <Container/>
        </AppProvider>
  
    )}


export default App;