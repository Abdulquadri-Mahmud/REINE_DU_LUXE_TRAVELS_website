import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Typewriter from './typewriter/TypeWriter'

export default function HeaderNav() {
  return (
    <div className="md:px-10 py-7 z-10 ">
        <Flex alignItems={'center'} justifyContent={'space-between'} className=''>
            <Box color={'green.500'} className="flex items-center gap-2">
                <Typewriter text="LEBEN TRAVELS AND TOUR" speed={100}/>
                {/* <Heading fontWeight={500}>Tourist</Heading> */}
            </Box>
            <div className="hidden md:block">
                <Flex alignItems={'center'} gap={5} color={'green.500'} className="font-medium text-[17px] nav">
                    <Link to={'/'} className=''>Home</Link>
                    <Link to={'/'} className='text-black hover:text-green-500'>About</Link>
                    <Link to={'/'} className='text-black hover:text-green-500'>Services</Link>
                    <Link to={'/'} className='text-black hover:text-green-500'>Packages</Link>
                    <div className="text-black hover:text-green-500">
                        Pages
                    </div>
                    <Link to={'/'} className='text-black hover:text-green-500'>Contact</Link>
                    {/* <Button rounded={'full'} bg={'green.500'} color={'white'}>Register</Button> */}
                </Flex>
            </div>
        </Flex>
    </div>
  )
}
