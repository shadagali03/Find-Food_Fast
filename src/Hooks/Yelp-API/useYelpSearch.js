import { useState, useEffect } from "react";
import * as api from './api';

export function useYelpSearch(term, location, price) {
    const [Restaurant, setRestaurant] = useState({});
    const [searchParams, setSearchParams] = useState({term, location, price})

    useEffect(() => {
        setRestaurant({});
        setSearchParams({term, location, price});
        const fetchData = async () => {
            try {
                const rawData = await api.get(searchParams);
                const resp = await rawData.json();
                setRestaurant(resp.businesses[0]);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [term, location, price]);

    return [Restaurant];


    

}