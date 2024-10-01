import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { RiMenu4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top');

  return (
    <Box>
        <Button bg={'transparent'} _hover={{bg: 'tranparent'}} onClick={onOpen} color={'black'}><RiMenu4Line className='text-2xl'/></Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                    <Box color={'black'} className="typewriter w-[310px]">
                        <Heading color={'blue.500'} fontWeight={500} fontSize={{md:25, base: 18}} className='text'>REINE DU LUXE TRAVELS</Heading>
                    </Box>
                </DrawerHeader>
                <DrawerBody>
                    <Flex alignItems={'start'} flexDir={'column'} gap={5} className="font-medium text-[17px] nav">
                        <Link to={'/'} className=''>Home</Link>
                        <Link to={'/'} className=''>About</Link>
                        <Link to={'/'} className=''>Services</Link>
                        <Link to={'/'} className=''>Packages</Link>
                        <div className="dropdown_cont">
                            <div className="dropdown_btn">
                                <p>Services</p>
                            </div>
                            <div className="dropdown"></div>
                        </div>
                        <div className="">
                            Pages
                        </div>
                        <Link to={'/'} className=''>Contact</Link>
                        {/* <Button rounded={'full'} bg={'green.500'} color={'white'}>Register</Button> */}
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}
