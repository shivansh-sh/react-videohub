import React from 'react'
import { Drawer, DrawerBody,DrawerCloseButton,DrawerOverlay, DrawerContent,DrawerHeader,Button,
     useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi';



const Header = () => {
    const { isOpen, onOpen, onClose } =useDisclosure();
  return  <>
    <Button
          zIndex={"overlay"}

    pos={"fixed"} top={"4"} left={"4"} colorScheme={"purple"} p={"0"} width={"10"} height={"10"} borderRadius={"full"}
    onClick={onOpen} 
    >
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Videohub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to={'/'}>Home</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to={'/videos?category=free'}>Free videos</Link>
                        </Button>

                        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                            <Link to={'/upload'}>Upload</Link>
                        </Button>
                    </VStack>

                    <HStack
                    pos={"absolute"}
                    bottom={"10"}
                    left={"0"}
                    width={"full"}
                    justifyContent={"space-evenly"}
                    >
                        <Button colorScheme={"purple"} >
                            <Link to={"/login"}>Log in</Link>
                        </Button>

                        <Button colorScheme={"purple"} variant={"outline"}>
                            <Link to={"/signup"}>Sign up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
    </>
  
}

export default Header