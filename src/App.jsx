import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  const typeFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackData, setFeedbackData] = useState(() => {
    const saveFeedback = window.localStorage.getItem('feedbackData');
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    }
    return typeFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
  }, [feedbackData]);

  const updateFeedback = feedbackType => {
    setFeedbackData(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positiveFeedback = Math.round(
    (feedbackData.good / totalFeedback) * 100
  );
  const handleResetBtn = () => setFeedbackData(typeFeedback);
  return (
    <>
      <Description />
      <Options
        handleClickFeedback={updateFeedback}
        resetFeedback={totalFeedback}
        resetBtn={handleResetBtn}
      />
      {totalFeedback >= 1 && (
        <Feedback
          quantity={feedbackData}
          feedbackPositive={positiveFeedback}
          total={totalFeedback}
        />
      )}
      {totalFeedback < 1 && <Notification />}
    </>
  );
}

export default App;
