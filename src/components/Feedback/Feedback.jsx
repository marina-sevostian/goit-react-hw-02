import css from './Feedback.module.css';

const Feedback = ({ quantity, feedbackPositive, total }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>Good: {quantity.good}</li>
        <li className={css.item}>Neutral: {quantity.neutral}</li>
        <li className={css.item}>Bad: {quantity.bad}</li>
        <li className={css.item}>Total: {total}</li>
      </ul>
      <p className={css.item}>Positive: {feedbackPositive}%</p>
    </>
  );
};

export default Feedback;
