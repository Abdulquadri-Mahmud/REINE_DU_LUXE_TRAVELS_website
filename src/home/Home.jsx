import React from 'react'
import Hero from '../components/Hero'
import { Box } from '@chakra-ui/react'
import AboutCmp from '../components/AboutCmp';
import Hot_offers from '../components/Hot_offers/Hot_offers';

export default function Home() {
  return (
    <Box className=''>
      <Hero/>
      <Hot_offers/>
    </Box>
  )
}
