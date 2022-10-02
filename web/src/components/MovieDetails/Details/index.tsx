import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { IMovie } from "../../../types/MovieTypes";
import "./style.css";

const Modal = (props: { movie: IMovie; closeWindow: () => void }) => {
  const variants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const infoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const rowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="movie"
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
      <motion.img
        className="movie__image"
        src={props.movie.image}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="movie__info" variants={infoVariants}>
        <motion.div className="movie__row" variants={rowVariants}>
          <h1 className="movie__title">{props.movie.title}</h1>
        </motion.div>
        <motion.div className="movie__row" variants={rowVariants}>
          <p className="movie__genre">{props.movie.genre}</p>
        </motion.div>
        <motion.div className="movie__row" variants={rowVariants}>
          <StarOutlineIcon />
          <ChatBubbleOutlineIcon />
        </motion.div>
        <motion.div
          className="movie__description-wrapper"
          variants={rowVariants}
        >
          <p className="movie__description">{props.movie.description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
