export interface SheetResponse {
  spreadsheetName: string;
  sheetName: string;
}

export interface DailyRating {
  date: string | null;
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
    spreadsheetId: '1bCqOO8PUe0Ywgf7BFWVaT4y5gCVSCkf79wfs4ZXNfOY',
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
      email: 'main-12@journal-12.iam.gserviceaccount.com',
      keyFile: undefined,
      key: '-----BEGIN PRIVATE KEY-----\n' +
        'MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDKx+PDZZio8bZx\n' +
        'l3vTbgAtyBf/ek9eBYeKbFgAMuXJWPyDjBEDIorQRpZtkaqQFii34gKl6hCRggmF\n' +
        'tCiRzQUftc20hKiH3A71fSnWSNsdmc2qzpbeSk4nVEVeNa0LdDPNIJi+xorPXCSL\n' +
        '/ZYHUWFZvARkvB1laMlAot+7i8bPUnQGT/cmU3F2ZFr4Lk6+DoLxLbgs1h9CH3q3\n' +
        'IODEI4nZXvE2fIGN6iRJEaOYQya0DlUzeq5um452XOM2fAoOym9gfk74bcSxxJCr\n' +
        'ovsVJmFfH4Goq3f/g3ZMnBqwyWa3ncZrUmc82Aj5sW61PSfxxUcYb/TkpjPy+dHp\n' +
        'B/WqUhBvAgMBAAECggEAZC3WZvz1K1mmsX2ODgkFC5kTygIp3aBLsuYNn6OFhDBz\n' +
        'J6X17Z+OBpEo1d6l7eMUoKuGdWMqZkhg3e4AMO+hfWX6xxjWja/4r+zy00tQ/NG0\n' +
        'GpNPU2hQLfvi/UT1RXhV8xwMegtqHkE+SO6xxNG+j29kmEObHjNjYYxVjbjjMh5/\n' +
        'YDArnC6OdYhV6wE5x4Z0TH8meJnVqvxGUrJt5Z34HXTGiPkIwQBc0aOG9OrjoabT\n' +
        'Y4iJfHQJldU84K9RVi4R2F+uweFYiJhXkZSm5NFkByjqHpp6msnQe3QFl0Z2Awwt\n' +
        '4e37eJ6felB0y3DuAY6tNnvy6Hyawx95TXiE3rAtWQKBgQDy4QJEspyBV5OcUk8g\n' +
        'pOovKKyXddvbZD5p3kMsprjwWmQmhGpkqzLPnm0ndjjX2qKXdykKE6okl4FRM4Gl\n' +
        'Gj5YyIeULwSRt6YOFZ59fjAA/fxIBTKX2Rew/aKlyhWJz3wF9+FiucLk9ccBmiqz\n' +
        'hWub7NWnCuYO0YNmgLMlBMVWPQKBgQDVvFPv6sRFkaf1J7F028pzl8VdOEyxHfbx\n' +
        'Dc3oreQxdladM5qoiTvBiznTIOUeJZFuynL0Enj98W6p6iYomS4trZe+XzyqHCa3\n' +
        'U0YrRI4UFv7b/mFf8kOcFoYCJ5f7KYkodvQD3ehlIvdoi1f12LlZ6Q60ottwALfs\n' +
        'pz9cbiFYGwKBgQDM7Qz86bcjasEhJFGfOYZeQ/Nb2BWpBuuiZ+ZFxmZEZgAaf59F\n' +
        'US2OAB4ZLabIebC2G9SErBLizPJPkSXSKFJylr/OR92TFWEGgTc4qz/VlndGTRxj\n' +
        'Asj6jQau29NQc8AxSPTiV9oZVUaUE3/z+J7S8QFT794sopo74ltE4MGgAQKBgQDU\n' +
        'OPAbK7+A2FSuDqCcSNSnnA5DNnCn+PnGdg97NpZ7KmZsJt4s9D6aOZTL90Cog2L5\n' +
        'YBluEZ2DgKOCIVWMQDTi9BfU1hmVSuiCZTQqKCLu/bpHVDj5nMLXDGI5Z3j30VE4\n' +
        'FYzK/h8PtP12F83Z9TxtcwTABWjfuEbnu1UlgNCo+wKBgQCpzdrW8F2kIv+Cc3gQ\n' +
        'qnCWO/T8u9uk6jJ6+9Xb/Vw1/WGhG8zbq7ik82vKnL5/JMPpho64+gk31ZIM9aLs\n' +
        'ZZpaZ/KpU72n0VcQ8r8lqLguS+jbjYQyRiW4SF9dHDw7+rbpr6P8MrG6Re+9PYR7\n' +
        '9AbRBb40iRPi5nNam8tjVlE2nw==\n' +
        '-----END PRIVATE KEY-----\n',
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
    _rawSheets: { '0': [Circular *1], '1548487884': [GoogleSpreadsheetWorksheet] },
    _rawProperties: {
      title: 'JournalSheet',
      locale: 'en_US',
      autoRecalc: 'ON_CHANGE',
      timeZone: 'America/New_York',
      defaultFormat: [Object],
      spreadsheetTheme: [Object]
    },
    _spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1bCqOO8PUe0Ywgf7BFWVaT4y5gCVSCkf79wfs4ZXNfOY/edit',
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
