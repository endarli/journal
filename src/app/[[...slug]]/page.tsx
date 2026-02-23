import { ClientOnly } from './client';
import { fetchCat } from '../../services/cat-service';
import { CatImage } from '../../components/';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  const catImageUrl = fetchCat().url;
  console.log(`Cat Image URL: ${catImageUrl}`);

  return (
    <>
      <ClientOnly />
      <CatImage url={catImageUrl} />
    </>
  );
}
