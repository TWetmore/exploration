import React from 'react';

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
  HStack
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import { GrDirections } from "react-icons/gr";


// stateless functional component


const NavBar = () => (
  <>
  
  <Box border="1px" borderColor="teal.100" background = "teal.50" >
  <Grid templateColumns="repeat(3, 1fr)">
    <GridItem colSpan={2} m={2}>
        <Button colorscheme="teal" variant="outline">
        <Icon as={GrDirections}  w={8} h={8} colorscheme="red" />
        <Text fontSize={{ base: "0px", md: "18px", lg: "20px" }}>TIME</Text>
        </Button>
    </GridItem>
    <GridItem colStart={4} colEnd={6}>
    <Menu>
      <MenuButton fontSize={{ base: "15px", md: "18px", lg: "20px" }} colorScheme="teal" m={2} as={Button} rightIcon={<ChevronDownIcon />} borderRadius="full" boxShadow="base">
        Your Trips
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            mr="12px"
          />
          <span>Trip 1</span>
        </MenuItem>
      </MenuList>
    </Menu>
    <Button m={2} fontSize={{ base: "15px", md: "18px", lg: "20px" }} m={2} align = 'right' colorscheme="red" borderRadius="full" boxShadow="base" verticalAlign="right">Log Out</Button>
    </GridItem>
    </Grid>
    </Box>
  </>
);

export default NavBar;
