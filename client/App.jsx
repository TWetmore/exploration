import React, { Component } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from './components/navBar.jsx'; 
import HomePageContainer from './containers/homePage';

class App extends Component {


  render() {

    return(
      <ChakraProvider>
        <HomePageContainer />
      </ChakraProvider>
    )
  }
}

export default App;
