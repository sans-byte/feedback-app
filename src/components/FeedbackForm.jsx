import { React, useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState(null);

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect( ()=> {
    if(feedbackEdit.edit === true){
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    let val = e.target.value;
    setText(val);
    if (val.trim().length >= 10) {
      setIsDisabled(false);
      setMessage(null);
    } else if (val.trim().length <= 10 && val.trim().length > 0) {
      setIsDisabled(true);
      setMessage("Write atleast 10 characters");
    } else {
      setIsDisabled(true);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback);
      }else{
        addFeedback(newFeedback);
      }
      setText("");
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you like to rate your service with us?</h3>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your review"
            onChange={handleTextChange}
            value={text}
          ></input>
          <Button isDisabled={isDisabled}>Send</Button>
        </div>
        <p>{message}</p>
      </form>
    </Card>
  );
}

export default FeedbackForm;
