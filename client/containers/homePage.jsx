import React, { Component } from 'react';
import {useDisclosure}  from "@chakra-ui/react"

import NavBar from '../components/navBar';
import Footer from '../components/footer';
import IntroText from '../components/IntroText';
import NewTripDrawer from '../modals/newTripButton';

class HomePageContainer extends Component {

  
  render() {
  

    return (
      <>

        <NavBar />

        <IntroText />

        <NewTripDrawer />

        <Footer />
      </>
    );
  }
}

export default HomePageContainer;
