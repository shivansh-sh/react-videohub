import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}
  >
    <form >
        <VStack 
        alignItems={'stretch'} spacing={'8'}  width={['full','300px']} m={'auto'}  marginBottom={'16'}>
        
            <Heading justifyContent={'center'}>Videohub</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input type={'text'} placeholder={'Name'} focusBorderColor={'purple.500'} required/>

            <Input type={'email'} placeholder={'Email'} focusBorderColor={'purple.500'} required/>
            <Input type={'text'} placeholder={'password'} focusBorderColor={'purple.500'} required/>

           

            <Button colorScheme={'purple'} type={'submit'}>Sign up</Button>

            <Text textAlign={'right'}>Already signed up?{' '}
            
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'} > Log in</Link>
            </Button>
            </Text>
        </VStack>
    </form>
  </Container>
}


export default Signup;