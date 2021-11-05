import React, { useState } from "react";
import "./App.css";
import Section from "./components/Feedback/Section";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Notification from "./components/Feedback/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const HendleChange = (e) => {
    const { value } = e.target;

    switch (value) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const sum = good + neutral + bad;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();

    const percent = Math.ceil((good * 100) / sum);
    return percent;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={HendleChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

export default App;
