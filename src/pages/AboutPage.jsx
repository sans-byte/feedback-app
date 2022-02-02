import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="container">
      <Card>
        <p> This is the feedback application so that you can rate us on the service you get by us.</p>
        <Link to='/'>Back to home</Link>
      </Card>
    </div>
  );
}

export default AboutPage;
