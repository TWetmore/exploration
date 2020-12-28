import React, { Component } from 'react';
// import { useDisclosure } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import IntroText from '../../components/IntroText';
import NewTripDrawer from '../../components/NewTrip';

class TimeHomePage extends Component {
  state = {
    trips : { }
  }

  handleNewTrip = (location, datesKnown, monthStart, dayStart, yearStart, monthEnd, dayEnd, yearEnd) => {
    console.log(location, datesKnown, monthStart, dayStart, yearStart, monthEnd, dayEnd, yearEnd);
    let startDate, endDate;
    ((monthStart) ? startDate = new Date(yearStart, monthStart, dayStart) : startDate = yearStart); 
    ((monthEnd) ? endDate = new Date(yearEnd, monthEnd, dayEnd) : endDate = yearEnd);

    const newTrip = { location : location.label, place_id : location.value.place_id, startDate: startDate, endDate : endDate};
    console.log('newTrip : ', newTrip);
    const trips = this.state.trips.push(newTrip);
    this.setState({trips});
    console.log('state: ', this.state)
  }


  render() {
    return (
      <>
        <NavBar />
        <IntroText />
        <NewTripDrawer handleNewTrip = {this.handleNewTrip} />
        <Footer />
      </>
    );
  }
}

export default TimeHomePage;
