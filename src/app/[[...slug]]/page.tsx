import { ClientOnly } from './client';
import { CatImageClient } from '../../services/cat-image-api';
import { CatImage } from '../../components/';

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
      <CatImage catInfo={catImageMetadata} />
    </>
  );
}
