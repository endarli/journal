export async function fetchCat() {
  const queryString =
    '?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
  const url = process.env.CAT_API_URL + '/v1/images/search' + queryString;
  const headers = new Headers({
    'Content-Type': 'application/json',
    'x-api-key': process.env.CAT_API_KEY,
  });
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(
        `Unable to Fetch Data, Please check URL
            or Network connectivity!!`
      );
    }
    const data = await response.json();
    console.log('Cat Data:', data);
    return data[0];
  } catch (error) {
    console.error('Some Error Occurred:', error);
  }
}
