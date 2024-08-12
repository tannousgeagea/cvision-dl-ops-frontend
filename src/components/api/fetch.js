import { baseURL } from "./base";

async function fetchData(url_path) { // url_path is a string, not an object
    
    try {

        console.log(`${baseURL}${url_path}`)
        const response = await fetch(`${baseURL}${url_path}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data['data'];
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default fetchData;