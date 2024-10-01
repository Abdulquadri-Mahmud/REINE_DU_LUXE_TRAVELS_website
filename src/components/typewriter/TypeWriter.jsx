import { Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 2 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      // Clean up timeout if component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <Heading fontSize={{md:25, base: 18}} fontWeight={500}>{displayedText}</Heading>;
};

export default Typewriter;
