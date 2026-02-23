import { CatMetadata } from './cat.types';
import { CAT_DATA } from '../mocks/cat-data';

export class CatClient {
  private hostUrl: string;
  private hostKey: string;

  constructor() {
    this.hostUrl = process.env.CAT_API_URL || '';
    this.hostKey = process.env.CAT_API_KEY || '';
  }

  public async fetchCatFromApi(): Promise<CatResponse | undefined> {
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

  public async fetchCat(environment: string): Promise<CatMetadata | undefined> {
    if (environment === 'local') {
      return CAT_DATA as CatMetadata;
    } else {
      try {
        const catData = await this.fetchCatFromApi();
        return catData[0] as CatMetadata;
      } catch (error) {
        console.error('Some Error Occurred:', error);
      }
    }
  }
}
