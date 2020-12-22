
import React, {Component} from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';

class SignUp extends Component  {
    state = {
        account : {email: '', username : '', password : '', confirmPassword : '', },
        errors : { }
    }

    validate = () => {
        const errors = {};

        if (this.state.account.email.trim() === '') {
            errors.username = 'Email address is required.'};

        if (this.state.account.username.trim() === '') {
            errors.username = 'Username is required.'};
        
        if (this.state.account.password.trim() === '') {
            errors.password = 'Password is required.'};

        if (this.state.account.confirmPassword.trim() === '') {
            errors.confirmPassword = 'Please confirm your password.'};

        if (this.state.account.confirmPassword !== this.state.account.password) {
            errors.verifyPassword = 'Passwords do not match'};

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({errors});
        if (errors) return;

        
    };

    handleChange = ({currentTarget : input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    };

  render() {

    const dataEntryStyle = {marginLeft: 150, marginRight: 200};

    const {account, errors} = this.state;
 

    return (
        <Flex width="full" align="center" justifyContent="center">
          <Box p={2}>
            <Box textAlign="center">
              <Heading>Sign Up</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form>
              <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input type="Username" placeholder="username" onChange = {this.handleChange}/>
                  <div></div>
                  {errors.username && <div style ={dataEntryStyle} >{errors.username}</div>}
            </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="test@test.com" onChange = {this.handleChange}/>
                  {errors.email && <div style ={dataEntryStyle} >{errors.email}</div>}
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="*******" onChange = {this.handleChange}/>
                  {errors.password && <div style ={dataEntryStyle} >{errors.email}</div>}
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" placeholder="*******" onChange = {this.handleChange}/>
                  {errors.confirmPassword && <div style ={dataEntryStyle} >{errors.confirmPassword}</div>}
                  {errors.verifyPassword && <div style ={dataEntryStyle} >{errors.verifyPassword}</div>}
                </FormControl>
                <Button width="full" mt={4} type="submit" onClick = {this.handleSubmit}>
                  Sign Up
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      );
  }
}


export default SignUp;