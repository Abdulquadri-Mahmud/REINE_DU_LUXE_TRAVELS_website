import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function AboutCmp() {
  return (
    <Flex justifyContent={'space-around'} flexWrap={'wrap'} maxW={{md: '85%', base: '97%'}} mx={'auto'} my={30}>
        <div className="md:w-[47%] w-[100%]">
            <img src="" alt="" />
        </div>
        <div className="md:w-[50%] w-[100%]">
            <div className="">
                <Text fontWeight={500} color={'green.500'}>ABOUT US</Text>
                <Heading color={'green.500'} mt={1} fontWeight={500} fontSize={35}><span className="text-black">Welcome to </span>Tourist</Heading>
            </div>
            <div className="mt-5">
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus assumenda distinctio voluptate, facilis sed ut sequi tempora adipisci? Minus assumenda accusamus ipsam. Id officiis animi amet ipsam ex saepe quo.</Text>
                <Text pt={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus assumenda distinctio voluptate, facilis sed ut sequi tempora adipisci? Minus assumenda accusamus ipsam. Id officiis animi amet ipsam ex saepe quo.</Text>
            </div>
        </div>
    </Flex>
  )
}
