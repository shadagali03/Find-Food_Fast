import { useYelpSearch } from "../Hooks/Yelp-API/useYelpSearch";
import RestaurantsData from "../Components/RestaurantsData";

function YelpSearcher(props) {
    const Restaurant = useYelpSearch(props.term, props.location, props.price);

    return (
        <RestaurantsData title={Restaurant.name} image={Restaurant.image_url} address={Restaurant.name} description={Restaurant.rating} />
    );
}

export default YelpSearcher;