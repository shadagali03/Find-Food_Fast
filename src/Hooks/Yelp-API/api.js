import { API_BASE_URL, BEARER_TOKEN } from "./config";
import QueryString from "qs";

export function get(path, queryParams) {
    const query = QueryString.stringify(queryParams);
    console.log(query)
    //return fetch(`${API_BASE_URL}${path}?${query}`, {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${query}`, {
    //return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972', {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}