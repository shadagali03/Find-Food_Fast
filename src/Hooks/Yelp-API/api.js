import { API_BASE_URL, BEARER_TOKEN } from "./config";
import QueryString from "qs";

export function get(queryParams) {
    const query = QueryString.stringify(queryParams);
    console.log(query)
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}