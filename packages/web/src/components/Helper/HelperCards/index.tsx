import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "./style.css";

const HelperCards = (props: { closeWindow: () => void }) => {
  const variants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const rowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="helper"
      variants={variants}
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        onClick={props.closeWindow}
        className="close__button"
        sx={{ borderRadius: "50px", minWidth: "min-content" }}
      >
        <CloseIcon />
      </Button>
      <motion.div className="helper__description-wrapper" variants={rowVariants}>
        <p className="helper__description">Here you will tell us what the movie you want add .<br/>
You just need insert a movie title and us will bring the whole information to you.</p>
      </motion.div>
    </motion.div>
  );
};

export default HelperCards;
