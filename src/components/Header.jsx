import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationCrosshairs, FaLocationPin, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import Typewriter from './typewriter/TypeWriter'
import Sidemenu from './sidebar/Sidemenu'

export default function Header() {
  return (
    <Box bg={'blue.500'}>
        <Flex justifyContent={'space-between'} color={'white'} fontSize={'13'} maxW={{md: '80%', base: '80%'}} mx={'auto'} className="trpaeziod">
            <div className="text-black mt-2">
                <div className="flex gap-1 items-center">
                    <IoCall/>
                    <Link to={'tel:+088 576-890-4950'}>+088 576-890-4950</Link>
                </div>
            </div>
            <div className="text-black mt-2">
                <div className="md:max-w-[100%] text-[13px] max-w-[60%] mx-auto " >
                    <marquee behavior="sliding" direction="" className={'capitalize'}>WELCOME TO REINE DU LUXE TRAVELS.</marquee>
                </div>
            </div>
            <div className="text-black mt-2">
                <div className="flex gap-1 items-center">
                    <MdEmail/>
                    <Link to={'mailto:example@gmail.com'}>example@gmail.com</Link>
                </div>
            </div>
        </Flex>
        <Box bg={'white'} zIndex={'100'} className="md:px-8 px-3 md:py-7 py-5 top-0 sticky text-black ">
            <Flex alignItems={'center'} justifyContent={'space-between'} className=''>
                <Box color={'black'} className="typewriter w-[310px]">
                    <Heading fontWeight={500} fontSize={{md:25, base: 18}} className='text'>REINE DU LUXE TRAVELS</Heading>
                </Box>
                <div className="hidden xl:block">
                    <Flex alignItems={'center'} gap={5} className="font text-[16px] nav">
                        <Link to={'/'} className='link'>Home</Link>
                        <Link to={'/'} className='link'>About Us</Link>
                        <div className="dropdown_cont">
                            <div className="dropdown_btn flex items-center gap-2">
                                <p>Services</p>
                                <IoIosArrowDown/>
                            </div>
                            <div className="dropdown flex flex-col gap-4">
                                <Link>Visa Assitanse</Link>
                                <Link>Travel Insurance</Link>
                                <Link>Approved Visa</Link>
                                <Link>Fligt Booking</Link>
                                <Link>Hotel Booking</Link>
                                <Link>Payment</Link>
                            </div>
                        </div>
                        <div className="dropdown_cont">
                            <div className="dropdown_btn flex items-center gap-2">
                                <p>Study Abroad</p>
                                <IoIosArrowDown/>
                            </div>
                            <div className="dropdown flex flex-col gap-4">
                                <Link>Study in Russia</Link>
                                <Link>Study in Scotland</Link>
                                <Link>Study in North Cyprus</Link>
                                <Link>Study in South Cyprus</Link>
                                <Link>Study in UK</Link>
                                <Link>Study in Canada</Link>
                                <Link>Study in Turkey</Link>
                                <Link>Study in France</Link>
                            </div>
                        </div>
                        <Link to={'/'} className='link'>Contact Us</Link>
                        {/* <Button rounded={'full'} bg={'green.500'} color={'white'}>Register</Button> */}
                    </Flex>
                </div>
                <Box display={{xl: 'none', md: 'block'}}>
                    <Sidemenu/>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}
