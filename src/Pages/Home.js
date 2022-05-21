import RestaurantsData from "../Components/RestaurantsData";
import { useEffect, useState } from "react";
import UserInputForm from "../Components/UserInputForm";
import { useYelpSearch } from "../Hooks/Yelp-API/useYelpSearch";
function Home () {
    const [isLoading, setIsLoading] = useState(true);
    const [FormData, setFormData] = useState({})
    const [Restaurant, searchParams, setSearchParams] = useYelpSearch('indian', '08536', '1');
    //const [Restaurant, searchParams, setSearchParams] = useYelpSearch(FormData.term, FormData.location, FormData.price);
    console.log(isLoading)

    function getRestaurantData (RestaurantData) {
        setFormData(RestaurantData)
        console.log(FormData)
        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <UserInputForm onGetData={getRestaurantData}/> 
        );     
    }
    else {
    return (
        <div>
            <UserInputForm onGetData={getRestaurantData}/>
            <RestaurantsData title={Restaurant.name} image={Restaurant.image_url} address={'Temporary Place Holder'} description={Restaurant.rating} />
        </div>
    );}
    
}

export default Home;