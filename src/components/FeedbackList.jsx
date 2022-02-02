import {React , useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import  FeedbackContext from "../components/context/FeedbackContext"


function FeedbackList() {

  const { feedback } = useContext(FeedbackContext);
  
  if (!feedback || feedback.length === 0) {
    return <p className="container">No feedbacks yet</p>;
  }
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            ></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
