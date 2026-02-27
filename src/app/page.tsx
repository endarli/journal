import { cache, useContext } from 'react';
import { ClientOnly } from './client';
import { CatClient } from '../services/cat-api';
import { GoogleSheetClient } from '../services/google-sheet-api';
import { getEnvironment } from './server/utilities/environment';
import { CatContainer } from '../components/';
import { FeelingsForm } from '../components/';
import { SheetContext } from '../components/Form/Form';

export const revalidate = 60 * 5; // Revalidate cache every 5 minutes

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default async function Page() {
  type DailyRating = {
    date: string | null;
    rating: number;
  };
  const environment = getEnvironment();
  const getCachedCat = cache(async () => {
    const catClient = new CatClient();
    return await catClient.fetchCat(environment);
  });
  const catMetadata = await getCachedCat();

  // const dayRating = useContext(SheetContext);
  const sheetClient = new GoogleSheetClient();
  const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date());
  const dayRating: DailyRating = {
    date: formattedDate,
    rating: 1,
  };
  // const test = await sheetClient.addEntryToSheet(dayRating);

  return (
    <>
      <ClientOnly />
      <FeelingsForm />
      <CatContainer catInfo={catMetadata} />
    </>
  );
}
