// import RestaurantsData from "../Components/RestaurantsData";
import { useEffect, useState } from "react";
import UserInputForm from "../Components/UserInputForm";
import yelp from 'yelp-fusion'
function Home () {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);
    const [gotFormData, setFormData] = useState({})
    const API_KEY = 'v6uAY_EgJkxbvU6UhHKsiq_c56ikKv9Sa4ucIJMol5xcuhu2d8hZC8cihGU_bwrroN7PZuMq9Zqu25t6abk4hDzhlWi0nVFn4pBeCMo32qYPGRAqusOyEQ4Ga8mHYnYx'

    //     useEffect(() => {
    //         console.log(gotFormData)
    //         setIsLoading(true);
    //         fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco`,{
    //             headers: {
    //                 Authorization: `Bearer ${API_KEY}`,
    //                 Origin: 'localhost',
    //                 withCredentials: true,
    //             }
    //         }).then((response) => {
    //             return response.json();
    //         }).then((data) => {
    //             const formatted = data.businesses[0];
    //             const restaurantData = {
    //                 title: formatted.name,
    //                 address: formatted.display_address,
    //                 image: formatted.image_url,
    //                 description: formatted.rating
    //             }

    //             setIsLoading(false);
    //             setLoadedData(restaurantData);
    //         })
    //     }, [gotFormData])

    //     function getRestaurantData (RestaurantData) {
    //         console.log(RestaurantData)
    //         setFormData(RestaurantData)
    //     }

    // if (isLoading) {
    //     return (
    //         <UserInputForm onGetData={getRestaurantData} />
    //     )
    // }
    return (
        // <UserInputForm onGetData={getRestaurantData}/>
        // {/* <RestaurantsData title={DUMMY_DATA[0].title} image={DUMMY_DATA[0].image} address={DUMMY_DATA[0].address} description={DUMMY_DATA[0].description}/> */}
        <div>

        </div>
    );
}

export default Home;