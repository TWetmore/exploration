import React, {Component} from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Image,
    Button,
    Text,
    Grid,
    GridItem, 
    Icon,
    Flex,
  } from '@chakra-ui/react';

  import { RiAddCircleFill } from "react-icons/ri";

  


class MyTrips extends Component {

    render() {
        const {handleModalToggle} = this.props
      return (
        <>
        <Text align="center" color="gray.900" mt="5%" fontSize="4xl">TIME</Text>
        <Text align="center" color="gray.700" fontSize="1xl" mb="2.5%"><b>T</b>ravel <b>I</b>tinerary <b>M</b>ade <b>E</b>asy</Text>
        <Flex justifyContent="center">
            <Button onClick = {handleModalToggle} leftIcon={<RiAddCircleFill />}  colorscheme="teal" size="md" >New Adventure</Button>
        </Flex>
        </>
      )
    }
}

export default MyTrips;