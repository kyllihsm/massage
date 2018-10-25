const API_TOKEN = '1986ab4de686120fdce7c3344cb16f8cb010774d';
const DOMAIN = 'https://docsscod.pipedrive.com';

export const getPersons = (callback) => {
    fetch(`${DOMAIN}/v1/persons?start=15&api_token=${API_TOKEN}`)
        .then((response) => response.json())
        .then((jsonResponse) => callback(jsonResponse.data))
}

