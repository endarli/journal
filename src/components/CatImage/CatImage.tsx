'use client';
import styles from './CatImage.module.css';

export function CatImage(url: string) {
  const urlString = url.url;
  return (
    <div className={styles.catImage}>
      <h3>Cute Cat</h3>
      <img src={urlString} alt="A cat" />
    </div>
  );
}
