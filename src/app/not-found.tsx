import { cache } from 'react';
import { getEnvironment } from '../utilities/environment';
import { CatClient } from '../services/cat-api';

export const revalidate = 60 * 60 * 24 * 7; // Revalidate cache every week

export default async function Custom404() {
  let environment = getEnvironment();
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
      <div style={styles as React.CSSProperties}>
        <p> Here's a cute cat instead </p>
        {catMetadata && (
          <img
            src={catMetadata.url}
            alt={catMetadata.breeds[0].name}
            width="300px"
          />
        )}
        <img src="/images/cat.jpg" alt="Ragdoll" width="300px" />
      </div>
    </>
  );
}
