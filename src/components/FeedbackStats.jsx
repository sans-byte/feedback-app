import {React, useContext} from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext)

  let average =
    feedback.reduce((acc, ele, feedback) => {
      return acc + ele.rating;
    }, 0) / feedback.length;

  average = average % 1 === 0 ? average : average.toFixed(1);

  return (
    <div className="container">
      <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4> Average raiting : {isNaN(average) ? 0 : average}</h4>
      </div>
    </div>
  );
}

export default FeedbackStats;
