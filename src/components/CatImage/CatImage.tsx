'use client';
import Image from 'next/image';
import styles from './CatImage.module.css';

export function CatImage(url: string) {
  return (
    <div className={styles.catImage}>
      <h3>Cat Image:</h3>
      <Image src={url} width={300} height={300} alt="A cat image" />
    </div>
  );
}
