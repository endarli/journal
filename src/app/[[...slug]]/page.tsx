import { ClientOnly } from './client';
import { CatImageClient } from '../../services/cat-image-api';
import { CatContainer } from '../../components/';
import { cache } from 'react';

export const revalidate = 60 * 5; // Revalidate cache every 5 minutes

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default async function Page() {
  const getCachedImage = cache(async () => {
    const client = new CatImageClient();
    return await client.fetchCatImage();
  });

  const catImageMetadata = await getCachedImage();

  return (
    <>
      <ClientOnly />
      <CatContainer catInfo={catImageMetadata} />
    </>
  );
}
