'use client';
import { useState, createContext } from 'react';
import { FormProps, FormDailyRating } from './Form.types';
import styles from './Form.module.css';
import { DailyRating } from '../../services/google-sheet.types';

export const SheetContext = createContext<FormDailyRating | undefined>(
  undefined
);

export function FeelingsForm({
  rating = 0,
  date = new Date().toString(),
}: FormProps) {
  const formattedDate = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(date));
  const [dayState, setDayState] = useState<FormProps>({
    rating,
    date: formattedDate,
  });
  const [submittedVals, setSubmittedVals] = useState<FormProps | undefined>({
    rating: undefined,
    date: undefined,
  });

  function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDayState({ rating: parseInt(event.target.value), date: dayState.date });
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDayState({
      rating: dayState.rating,
      date: event.target.value,
    });
  }

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setSubmittedVals({ ...dayState });

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
    <SheetContext.Provider
      value={submittedVals?.rating ? (submittedVals as DailyRating) : undefined}
    >
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

        {submittedVals?.rating !== undefined && (
          <p>
            Your rating for {submittedVals.date}: {submittedVals.rating}
          </p>
        )}
      </div>
    </SheetContext.Provider>
  );
}
