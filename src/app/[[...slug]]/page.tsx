import { ClientOnly } from './client';
import { CatClient } from '../../services/cat-api';
import { CatContainer } from '../../components/';
import { cache } from 'react';
import { getEnvironment } from '../server/utilities/environment';

export const revalidate = 60 * 5; // Revalidate cache every 5 minutes

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default async function Page() {
  const environment = getEnvironment();
  const getCachedCat = cache(async () => {
    const client = new CatClient();
    return await client.fetchCat(environment);
  });
  const catMetadata = await getCachedCat();

  return (
    <>
      <ClientOnly />
      <CatContainer catInfo={catMetadata} />
    </>
  );
}
