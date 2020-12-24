<<<<<<< HEAD
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
=======
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './containers/Login';
import SignupPage from './components/signup';
import RetrievalPage from './components/retrieval';

const App = () => {
  // const cat = 'cat';
  return (
    <div id="app" className="main-container">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        {/* <Route path="/resetPassword" exact component={RetrievalPage} /> */}
      </Switch>
    </div>
  );
};
>>>>>>> main

export default App;
