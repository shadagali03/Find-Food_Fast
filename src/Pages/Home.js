import RestaurantsData from "../Components/RestaurantsData";
import { useState } from "react";
import UserInputForm from "../Components/UserInputForm";
import { useYelpSearch } from "../Hooks/Yelp-API/useYelpSearch";
import YelpSearcher from "../Components/YelpSearcher";
function Home () {
    const [isLoading, setIsLoading] = useState(true);
    const [FormData, setFormData] = useState({})
    //const Restaurant = useYelpSearch(FormData.term, FormData.location, FormData.price);

    function getRestaurantData (RestaurantData) {
        setFormData(RestaurantData)
        setIsLoading(false);
        console.log(FormData)
    }

    if (isLoading) {
        return (
            <UserInputForm onGetData={getRestaurantData}/> 
        );     
    }
    return (
        <div>
            <UserInputForm onGetData={getRestaurantData}/>
            <YelpSearcher term={FormData.term} location={FormData.location} price={FormData.price} />
        </div>
    );
}

export default Home;