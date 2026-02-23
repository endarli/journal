import { cache } from 'react';
import { getEnvironment } from './server/utilities/environment';
import { CatClient } from '../services/cat-api';

export const revalidate = 60 * 60 * 24 * 7; // Revalidate cache every week

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default async function Custom404() {
  const environment = getEnvironment();
  const getCachedCat = cache(async () => {
    const client = new CatClient();
    return await client.fetchCat(environment);
  });
  const catMetadata = await getCachedCat();
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  };

  return (
    <>
      <h2>404 : Page Not Found</h2>
      <div style={styles}>
        <p> Here's a cute cat instead </p>
        <img
          src={catMetadata.url}
          as="img"
          alt={catMetadata.breeds[0].name}
          width="300px"
        />
      </div>
    </>
  );
}
