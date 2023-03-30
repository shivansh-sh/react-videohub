import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import  {Carousel}  from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: "absolute",
    left:"50%",
    top:"50%",
    transform: "translate(-50%,-50%)",
    textTransform: "upperCase",
    p:"4",
    size:"4xl",
}

const Home = () => {
  return <Box>
  <MyCarousel/>
  <Container maxW={"container.xl"} minHeight={'100vh'} p={"16"}>
    <Heading textTransform={'uppercase'} py={"2"} width={"fit-content"} borderBottom={"2px"} m={"auto"}>

    Services
    </Heading>

    <Stack
    h={"full"}
    p={"4"}
    alignItems={"center"}
    direction={['column', 'row']}
    >
        <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}>
        You want to know what will be happening?
        Want to know how will you grow professionally in the coming year? What changes you have to make to get successful and get recognized at work? Want to know how your future enrolls? Is my marriage going to happen with my dream girl? Why iam facing so many problems? There are so many questions that might be rolling on your thoughts and everything needs to be answered. Future prediction can really give you an ample picture about your future in every aspect.

        True predictions?
        Are you curious to know about your future? You have reached the right spot. No Horoscope, Tarot Card prediction or Fortune Teller will be able to tell you exactly what is going to happen in your future. Many people have came up with questions, doubts, fear, anxiety about their future, but we helped them to reach their destination.

        Think about your life
        Do you need help with your future prediction? We would like to present you some topics to think about for your week. I hope you will discover new aspects of your life and to find out more about the meaning of your life and your future. This could change your life like several others who have done before. This is not any kind of gimmick or magic, this is real. Give it a try for a week, this could be a life changer for you.

        Are your ready to think about your life and future?
        </Text>
    </Stack>
  </Container>
  </Box>
  
}

const MyCarousel =()=>
(

    
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
     <Box width={"full"} height={"100vh"} >
        <Image src={img1} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} >Watch the future</Heading>
     </Box>
     <Box width={"full"} height={"100vh"} >
        <Image src={img2} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Future is gaming</Heading>
     </Box>
     <Box width={"full"} height={"100vh"} >
        <Image src={img3} />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>gaming console</Heading>
     </Box>
     <Box width={"full"} height={"100vh"} >
        <Image src={img4} />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Nightlife is cool</Heading>
     </Box>
     
</Carousel>


)

export default Home