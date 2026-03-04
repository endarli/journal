'use client';
import styles from './CatContainer.module.css';
import { CatMetadata } from '../../services/cat.types';

export const CatContainer = ({ url, breeds }: CatMetadata) => {
  return (
    <div className={styles.catContainer}>
      <h3>Cute Cat</h3>
      <img className={styles.catImage} src={url} alt={breeds[0].name} />
      <div className={styles.catDetails}>
        <h3>{breeds[0].name}</h3>
        <p>Temperament: {breeds[0].temperament}</p>
        <p>Description: {breeds[0].description}</p>
        <p>Origin: {breeds[0].origin}</p>
        <p>Hypoallergenic: {breeds[0].hypoallergenic ? 'Yes' : 'No'}</p>
        <a href={breeds[0].wikipedia_url} target="_blank" rel="noreferrer">
          Learn more about the {breeds[0].name}
        </a>
      </div>
    </div>
  );
};
