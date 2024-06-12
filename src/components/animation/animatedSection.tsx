// components/AnimatedSection.js
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersection from '@/hooks/useIntersection';

const AnimatedSection = ({ children }) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px');

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inViewport ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
