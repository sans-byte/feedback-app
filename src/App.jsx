import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutLinkIcon />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
