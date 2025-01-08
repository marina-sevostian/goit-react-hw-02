import css from './Options.module.css';

const Options = ({ handleClickFeedback, resetFeedback, resetBtn }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button
          className={css.itemBtn}
          onClick={() => handleClickFeedback('good')}
        >
          Good
        </button>
      </li>
      <li className={css.item}>
        <button
          className={css.itemBtn}
          onClick={() => handleClickFeedback('neutral')}
        >
          Neutral
        </button>
      </li>
      <li className={css.item}>
        <button
          className={css.itemBtn}
          onClick={() => handleClickFeedback('bad')}
        >
          Bad
        </button>
      </li>
      {resetFeedback >= 1 && (
        <li className={css.item}>
          <button className={css.itemBtn} onClick={resetBtn}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
