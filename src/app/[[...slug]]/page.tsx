import { ClientOnly } from './client';
import { CatImageClient } from '../../services/cat-image-api';
import { CatImage } from '../../components/';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default async function Page() {
  // undefined
  const client = new CatImageClient();
  const catImageUrl = await client.fetchCatImageUrl();

  return (
    <>
      <ClientOnly />
      <CatImage url={catImageUrl} />
    </>
  );
}
