'use client';
import { useState } from 'react';
import { FormProps } from './Form.types';
import styles from './Form.module.css';

export function FeelingsForm({ rating = 0, date = new Date() }: FormProps) {
  const formattedDate = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);
  const [dayState, setDayState] = useState({ rating, date: formattedDate });
  const [submittedVals, setSubmittedVals] = useState({
    rating: null,
    date: null,
  });
  console.log(dayState.date);
  function handleRatingChange(event) {
    setDayState({ rating: event.target.value, date: dayState.date });
  }

  function handleDateChange(event) {
    setDayState({ rating: dayState.rating, date: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    setSubmittedVals(dayState);
  }

  return (
    <div className={styles.feelingsForm}>
      <h2>What's your rating for today?</h2>
      <div className={styles.inputs}>
        <input
          type="number"
          id="rating"
          value={dayState.rating}
          min={-2}
          max={2}
          onChange={handleRatingChange}
        />
        <input
          type="date"
          id="date"
          value={dayState.date}
          onChange={handleDateChange}
        />
        <button onClick={handleClick}>Submit</button>
      </div>

      <p>
        Your rating for {submittedVals.date}: {submittedVals.rating}
      </p>
    </div>
  );
}
