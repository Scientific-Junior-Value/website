import "./Animation.css";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0},
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Animation = (props) => {
  return (
    <motion.div
      className="animation"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

export default Animation;
