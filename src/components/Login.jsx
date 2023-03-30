import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <Container maxW={'container.xl'} h={'100vh'} p={'16'}
  >
    <form >
        <VStack 
        alignItems={'stretch'} spacing={'8'}  width={['full','300px']} m={'auto'} my={'16'} >
        
            <Heading justifyContent={'center'}>Welcome back</Heading>
            <Input type={'email'} placeholder={'Email'} focusBorderColor={'purple.500'} required/>
            <Input type={'text'} placeholder={'password'} focusBorderColor={'purple.500'} required/>

            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'} >Forget password?</Link>
            </Button>

            <Button colorScheme={'purple'} type={'submit'}>Log in</Button>

            <Text textAlign={'right'}>New user?{' '}
            
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'} > Sign up</Link>
            </Button>
            </Text>
        </VStack>
    </form>
  </Container>
}

export default Login