import React from 'react'
import Header from './Header'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <Box bgGradient='linear(to-l, red.500, gray.800)'
        className={className}
        style={{ ...style, display: "none",
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box bgGradient='linear(to-l, red.500, gray.800)'
        className={className}
        style={{ ...style, display: "none", 
          paddingTop: '5.5px', paddingLeft: '5.5px',
        }}
        onClick={onClick}
      />
    );
}

export default function Hero() {
    var settings = {
      fade: true,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      waitForAnimate: false,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

  return (
    <div className='h-[80vh]'>
        <Header/>
        <Slider {...settings}>
            <Box width={'100%'} height={'80vh'} bgImage={'/bg1.jpg'} bgRepeat={'no-repeat'} bgPos={'top'} bgSize={'cover'} bgBlendMode={'multiply'} className='bgImg'>
              {/* <video id='myvideo' autoplay muted loop>
                <source src='/bg1.mp4' type='video/mp4'/>
                Your browser does not support HTML5 video.
              </video> */}
                <Flex justifyContent={'center'} alignItems={'center'} pl={{md: 20, base: 3}} maxW={{md:'60%', base: '97%'}} height={'100%'} color={'white'}>
                    <Box>
                        <Heading fontWeight={500} fontSize={{md:50, base: 25}} fontFamily={'serif'} textAlign={{md: 'start', base: 'start'}}>WELCOME <br /> TO REINE DU LUXE TRAVELS</Heading>
                        <Heading fontWeight={500} my={5} fontSize={{md:25, base: 25}} fontFamily={'serif'} textAlign={{md: 'start', base: 'start'}}>Explore Our World Class Services at Your FingerTips|</Heading>
                        <Heading fontWeight={500} fontSize={{md:25, base: 20}} fontFamily={'serif'} textAlign={{md: 'start', base: 'start'}}>Best | Affordable | Trusted Travel Agency in Lagos, Nigeria</Heading>
                        <Flex mt={5}>
                            <Button bgGradient={'linear(to-l, blue.300, blue.600)'} _hover={{bgGradient:'linear(to-r, blue.300, blue.600)'}} color={'white'} height={'45px'} fontSize={20} fontFamily={''} width={{md: '200px', base: '180px'}} className='glass'>Contact Us Now</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box width={'100%'} height={'80vh'} bgImage={'/con2.jpg'} bgRepeat={'no-repeat'} bgPos={'right'} bgSize={'cover'} bgBlendMode={'multiply'}className='bgImg'>
                <Flex justifyContent={'center'} alignItems={'center'} pl={{md: 20, base: 3}} maxW={{md:'60%', base: '97%'}} height={'100%'}>
                    <Box color={'white'}>
                        <Heading fontWeight={500} fontSize={{md:55, base: 30}} fontFamily={'serif'} textAlign={{md: 'start', base: 'center'}}>DISCOVER THE STORY-WORTHY TRAVEL MOMENTS</Heading>
                        {/* <Heading fontWeight={500} my={5} fontSize={{md:30, base: 25}} textAlign={{md: 'start', base: 'start'}}>Explore Our World Class Services at Your FingerTips|</Heading> */}
                        {/* <Heading fontWeight={500} fontSize={{md:30, base: 20}} textAlign={{md: 'start', base: 'start'}}>Best | Affordable | Trusted Travel Agency in Lagos, Nigeria</Heading> */}
                      <Flex mt={5} justifyContent={{md:'start', base:'center'}}>
                        <Button bgGradient={'linear(to-l, blue.300, blue.600)'} _hover={{bgGradient:'linear(to-r, blue.300, blue.600)'}} color={'white'} height={'45px'} fontSize={20} fontFamily={''} width={{md: '200px', base: '180px'}}>Contact Us Now</Button>
                      </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box width={'100%'} height={'80vh'} bgImage={'/bg3.jpg'} bgRepeat={'no-repeat'} bgPos={'bottom'} bgSize={'cover'} bgBlendMode={'multiply'} className='bgImg'>
                <Flex justifyContent={'center'} alignItems={'center'} pl={{md: 20, base: 3}} maxW={{md:'60%', base: '97%'}} height={'100%'}>
                  <Box color={'white'}>
                    <Heading fontWeight={500} fontSize={{md:55, base: 30}} fontFamily={'serif'} textAlign={{md: 'start', base: 'center'}}>DISCOVER THE STORY-WORTHY TRAVEL MOMENTS</Heading>
                    <Text fontWeight={500} my={5} fontSize={{md:20, base: 16}} textAlign={{md: 'start', base: 'start'}}></Text>
                    {/* <Heading fontWeight={500} fontSize={{md:30, base: 20}} textAlign={{md: 'start', base: 'start'}}>Best | Affordable | Trusted Travel Agency in Lagos, Nigeria</Heading> */}
                    <Flex mt={5} justifyContent={{md:'start', base:'center'}}>
                        <Button bgGradient={'linear(to-l, blue.300, blue.600)'} _hover={{bgGradient:'linear(to-r, blue.300, blue.600)'}} color={'white'} height={'45px'} fontSize={20} fontFamily={''} width={{md: '200px', base: '180px'}}>Contact Us Now</Button>
                    </Flex>
                  </Box>
                </Flex>
            </Box>
        </Slider>
        <div className="">
        </div>
        {/* <Flex justifyContent={'center'} alignItems={'center'} bgImage={'/bg'} height={'100%'} className="">
            
        </Flex> */}
    </div>
  )
}
