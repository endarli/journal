'use client';
import { useState, createContext } from 'react';
import { FormProps, FormDailyRating } from './Form.types';
import styles from './Form.module.css';

export const SheetContext = createContext<FormDailyRating | null>(null);

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

  function handleRatingChange(event) {
    setDayState({ rating: event.target.value, date: dayState.date });
  }

  function handleDateChange(event) {
    setDayState({ rating: dayState.rating, date: event.target.value });
  }

  async function handleClick(event) {
    event.preventDefault();
    setSubmittedVals(dayState);

    // const sheetClient = new GoogleSheetClient();
    // const formattedDate = new Intl.DateTimeFormat('en-US').format(
    //   new Date(submittedVals.date)
    // );
    // const dayRating = new FormDailyRating({
    //   date: formattedDate,
    //   rating: submittedVals.rating,
    // });
    // const test = await sheetClient.addEntryToSheet(dayRating);
  }

  return (
    <SheetContext.Provider value={submittedVals}>
      <div className={styles.feelingsForm}>
        <h2>What's your rating for today?</h2>
        <form className={styles.inputs}>
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
        </form>

        {submittedVals.rating !== null && (
          <p>
            Your rating for {submittedVals.date}: {submittedVals.rating}
          </p>
        )}
      </div>
    </SheetContext.Provider>
  );
}
