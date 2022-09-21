import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import  Statistics from './Statistic';

const App = ()=> {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);


  const onCount = (e) => {
    switch (e.target.textContent) {
      case 'Good':
        setGood(Good => Good + 1);
        break;

      case 'Neutral':
        setNeutral(Neutral => Neutral + 1);
        break;

      case 'Bad':
        setBad(Bad => Bad + 1);
        break;

      default: return;
    }
  };   
 
  const countTotalFeedback = () => {
    const total = Good + Neutral + Bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Good !== 0
      ? Math.round((Good / countTotalFeedback()) * 100)
      : 0;
  };
 
  const options = Object.keys({Good, Neutral, Bad});
  const allFeedbacks = countTotalFeedback();
  
  
  return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {allFeedbacks > 0 ? (
            <Statistics
              Good={Good}
              Neutral={Neutral}
              Bad={Bad}
              total={allFeedbacks}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
  }


export default App;
