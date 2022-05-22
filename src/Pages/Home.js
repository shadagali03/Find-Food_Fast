import RestaurantsData from "../Components/RestaurantsData";
import { useEffect, useState } from "react";
import UserInputForm from "../Components/UserInputForm";
import { useYelpSearch } from "../Hooks/Yelp-API/useYelpSearch";
function Home () {
    const [isLoading, setIsLoading] = useState(true);
    const [FormData, setFormData] = useState({})
    //const [Restaurant, searchParams, setSearchParams] = useYelpSearch('indian', '08536', '1');
    const [Restaurant] = useYelpSearch(FormData.term, FormData.location, FormData.price);
    console.log(Restaurant)

    function getRestaurantData (RestaurantData) {
        setFormData(RestaurantData)
        setIsLoading(false);
        console.log(FormData.term)
        console.log(FormData.location)
        console.log(FormData.price)
    }

    if (isLoading) {
        return (
            <UserInputForm onGetData={getRestaurantData}/> 
        );     
    }
    return (
        <div>
            <UserInputForm onGetData={getRestaurantData}/>
            <RestaurantsData title={Restaurant.name} image={Restaurant.image_url} address={'Temporary Place Holder'} description={Restaurant.rating} />
        </div>
    );
}

export default Home;