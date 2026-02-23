import { CatImageMetadata } from './cat-image.types';
export class CatImageClient {
  private hostUrl: string;
  private hostKey: string;

  constructor() {
    this.hostUrl = process.env.CAT_API_URL || '';
    this.hostKey = process.env.CAT_API_KEY || '';
  }

  public async fetchCat(): Promise<CatImageResponse | undefined> {
    const queryString =
      '?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
    const url = this.hostUrl + '/v1/images/search' + queryString;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-api-key': this.hostKey,
    });
    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
      next: { revalidate: 60 * 60 * 5 }, // Revalidate cache every 5 hours
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        console.error('API Response Error:', response);
        throw new Error(
          `Unable to Fetch Data from API, Please check
            URL or Network connectivity!!`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Some Error Occurred:', error);
    }
  }

  public async fetchCatImage(): Promise<CatImageMetadata | undefined> {
    try {
      const catData = await this.fetchCat();
      return catData[0] as CatImageMetadata;
    } catch (error) {
      console.error('Some Error Occurred:', error);
    }
  }
}
