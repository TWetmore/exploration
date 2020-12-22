import React, { Component } from 'react';

import NavBar from '../components/navBar';
import Footer from '../components/footer';
import MyTrips from '../components/myTrips';
import NewTripModal from '../modals/newTripModal'

class HomePageContainer extends Component {
  // state = { 
  //   isOpen : false, 
  //   modalsOpen : false,
  // }

  // handleModalToggle = () => {
  //   let isOpen = !this.state.isOpen;
  //   console.log(isOpen)
  //   this.setState({isOpen});
  //   console.log(this.state.isOpen);
  // }

  render() {
    return (
      <>


        <NavBar />

        <NewTripModal />
        
        <MyTrips />

        <Footer />
      </>
    );
  }
}

export default HomePageContainer;
