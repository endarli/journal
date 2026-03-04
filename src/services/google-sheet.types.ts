export interface SheetResponse {
  spreadsheetName: string;
  sheetName: string;
}

export interface DailyRating {
  date: string | undefined;
  rating: number;
}

/*
GoogleSpreadsheetWorksheet {
  _headerRowIndex: 1,
  _rawProperties: {
    sheetId: 0,
    title: 'Sheet1',
    index: 0,
    sheetType: 'GRID',
    gridProperties: { rowCount: 1000, columnCount: 26 }
  },
  _cells: [],
  _rowMetadata: [],
  _columnMetadata: [],
  _protectedRanges: null,
  _headerValues: undefined,
  _rowCache: [],
  _spreadsheet: GoogleSpreadsheet {
    spreadsheetId: '#',
    auth: JWT {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      apiKey: undefined,
      projectId: null,
      quotaProjectId: undefined,
      transporter: [Gaxios],
      credentials: [Object],
      eagerRefreshThresholdMillis: 300000,
      forceRefreshOnFailure: false,
      universeDomain: 'googleapis.com',
      redirectUri: undefined,
      certificateCache: {},
      certificateExpiry: null,
      certificateCacheFormat: 'PEM',
      refreshTokenPromises: Map(0) {},
      endpoints: [Object],
      issuers: [Array],
      clientAuthentication: 'ClientSecretPost',
      _clientId: undefined,
      _clientSecret: undefined,
      refreshHandler: undefined,
      email: '',
      keyFile: undefined,
      key: '',
      keyId: undefined,
      defaultScopes: undefined,
      scopes: [Array],
      scope: undefined,
      subject: undefined,
      gtoken: [GoogleToken],
      additionalClaims: undefined,
      useJWTAccessWithScope: undefined,
      defaultServicePath: undefined,
      access: undefined,
      [Symbol(shapeMode)]: false,
      [Symbol(kCapture)]: false
    },
    _rawSheets: { '0': [Circular *1], '#': [GoogleSpreadsheetWorksheet] },
    _rawProperties: {
      title: 'JournalSheet',
      locale: 'en_US',
      autoRecalc: 'ON_CHANGE',
      timeZone: 'America/New_York',
      defaultFormat: [Object],
      spreadsheetTheme: [Object]
    },
    _spreadsheetUrl: '',
    _deleted: false,
    sheetsApi: [Function: ky] {
      get: [Function (anonymous)],
      post: [Function (anonymous)],
      put: [Function (anonymous)],
      patch: [Function (anonymous)],
      head: [Function (anonymous)],
      delete: [Function (anonymous)],
      create: [Function (anonymous)],
      extend: [Function (anonymous)],
      stop: Symbol(stop),
      retry: [Function: retry]
    },
    driveApi: [Function: ky] {
      get: [Function (anonymous)],
      post: [Function (anonymous)],
      put: [Function (anonymous)],
      patch: [Function (anonymous)],
      head: [Function (anonymous)],
      delete: [Function (anonymous)],
      create: [Function (anonymous)],
      extend: [Function (anonymous)],
      stop: Symbol(stop),
      retry: [Function: retry]
    }
  }
}
*/
