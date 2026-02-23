import { DailyRating } from '../../services/google-sheet.types';

export type FormProps = {
  // daily mood rating
  rating?: number;

  // date mood was recorded
  date?: string;
};

export type FormDailyRating = DailyRating;
