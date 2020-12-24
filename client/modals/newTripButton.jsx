import React, { useState } from "react";
import DatePicker from "react-datepicker";

import {
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Button,
  useDisclosure,
  FormControl,
  Stack,
  Checkbox,
  Text,
  Box,
} from '@chakra-ui/react';


import { RiAddCircleFill } from 'react-icons/ri';

export default function NewTripDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {

  };

  return (
    <>
      <Flex justifyContent="center">
        <Button ref={btnRef} onClick={onOpen} leftIcon={<RiAddCircleFill />} colorScheme="teal" size="md">New Adventure</Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader background="teal.50" fontSize="2xl">Add Your Adventure</DrawerHeader>

            <DrawerBody>
              <FormControl>
                <Text m={2} fontSize="2xl">Location</Text>
                <Stack m={2}>
                  <Input variant="outline" placeholder="Location" />
                </Stack>
                <Text m={2} fontSize="2xl">Dates</Text>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <Flex justifyContent="center">
                    <Stack m={2} spacing={10} direction="row">
                      <Text fontSize="xl">Start</Text>
                        <DatePicker selected={startDate}
                        onChange={(date) => setStartDate(date)} 
                        isClearable={true} />
                    </Stack>
                  </Flex>
                </Box>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <Stack m={2} spacing={10} direction="row">
                    <Text fontSize="xl">End</Text>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                  </Stack>
                </Box>
                <Stack>
                  <Checkbox colorScheme="purple">
                    No Dates Yet!
                    </Checkbox>
                </Stack>
              </FormControl>


              <Flex mt={5}>
                <Button colorScheme="purple" m={1} onClick={onClose} >Cancel</Button>
                <Button colorScheme="teal" m={1} onClick={handleSubmit}>Save</Button>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
