import { GoogleSpreadsheet } from 'google-spreadsheet';
import { DailyRating } from './google-sheet.types';
import { JWT } from 'google-auth-library';

export class GoogleSheetClient {
  private hostEmail: string;
  private hostKey: string;
  private hostSheetID: string;
  private auth: JWT;

  constructor() {
    this.hostEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
    this.hostKey = process.env.GOOGLE_PRIVATE_KEY || '';
    const serviceAccountAuth = new JWT({
      email: this.hostEmail,
      key: this.hostKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.hostSheetID = process.env.GOOGLE_SHEET_ID || '';
    this.auth = serviceAccountAuth;
  }

  public async fetchDocFromApi(): Promise<any | undefined> {
    try {
      const doc = new GoogleSpreadsheet(this.hostSheetID, this.auth, {
        retryConfig: 0,
      });
      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0];
      //   const spreadsheetName = sheet._spreadsheet.title;
      //   const sheetName = sheet.title;
      //   await sheet.loadCells('A1:E10');
      //   console.log(sheet.cellStats);
      return sheet;
    } catch (error) {
      console.error('Sheet API Error:', error);
      throw new Error(
        `Unable to Fetch Data from Sheet API, Please check
            URL or Network connectivity!!`
      );
    }
  }

  public async addEntryToSheet({ date, rating }: DailyRating) {
    try {
      const sheet = await this.fetchDocFromApi();
      await sheet.addRow({ date, rating });
    } catch (error) {
      console.error('Sheet Error:', error);
      throw new Error(
        `Unable to Fetch Data from Sheet API, Please check
            URL or Network connectivity!!`
      );
    }
  }
}
