import React from "react";

function Card({ children , inverted}) {
  
  return (
    <div className="container">
      <div className= {`card ${inverted && `inverted`}`} >{children}
      </div>
    </div>
  );
}

export default Card;
