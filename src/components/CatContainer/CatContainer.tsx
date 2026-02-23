'use client';
import styles from './CatContainer.module.css';
import { CatMetadata } from '../../services/cat.types';

export function CatContainer(params: { catInfo: CatMetadata }) {
  const catObject = params.catInfo;
  return (
    <div className={styles.catContainer}>
      <h3>Cute Cat</h3>
      <img
        className={styles.catImage}
        src={catObject.url}
        alt={catObject.breeds[0].name}
      />
      <div className={styles.catDetails}>
        <h3>{catObject.breeds[0].name}</h3>
        <p>Temperament: {catObject.breeds[0].temperament}</p>
        <p>Description: {catObject.breeds[0].description}</p>
        <p>Origin: {catObject.breeds[0].origin}</p>
        <p>
          Hypoallergenic: {catObject.breeds[0].hypoallergenic ? 'Yes' : 'No'}
        </p>
        <a
          href={catObject.breeds[0].wikipedia_url}
          target="_blank"
          rel="noreferrer"
        >
          Learn more about the {catObject.breeds[0].name}
        </a>
      </div>
    </div>
  );
}
