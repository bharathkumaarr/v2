import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}    // Starts slightly lower and invisible
      animate={{ opacity: 1, y: 0 }}     // Glides up and fades in
      exit={{ opacity: 0, y: -20 }}      // Glides up and fades out on leave
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]         // Custom "Luxury" cubic-bezier easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

