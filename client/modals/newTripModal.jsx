import React from 'react';

import { useDisclosure } from "react-use-disclosure"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    FormLabel
  } from "@chakra-ui/react"

  
const NewTripModal = () => {
    const {
        isOpen: isModalOpen,
        open: openModal,
        close: closeModal
      } = useDisclosure();
      const { isOpen, onOpen, onClose } = useDisclosure()
    
      const initialRef = React.useRef()
      const finalRef = React.useRef()
      
      return(
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder="First name" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      )   
      }

export default NewTripModal;