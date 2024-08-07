import axios from "axios";

const API_KEY = '44034248-a40ccbcbdd6c1fdfd22c52422';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page) {
    try {
     const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 15,
     };
        
        const response = await axios.get(BASE_URL, { params });

        return response.data;

    } catch (error) {
        
        throw new Error('Failed to fetch images');
    }
    
}