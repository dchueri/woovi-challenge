import { motion } from "framer-motion";
import './style.css';

const MovieDetails = (props: { close: any, children: any }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.97)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className="overlay"
      onClick={props.close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {props.children}
    </motion.div>
  );
};

export default MovieDetails;
