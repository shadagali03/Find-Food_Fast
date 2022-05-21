import {useEffect, useRef} from 'react'
import Card from './UI/Card'
import classes from './UserInputForm.module.css'

function UserInputForm(props) {

    const zipCodeRef = useRef();
    const priceRef = useRef();
    const cuisineRef = useRef();
    console.log('hi');

    function findRestaurantHandler (event) {
        event.preventDefault();

        const enteredZip = zipCodeRef.current.value;
        const enteredPrice = priceRef.current.value;
        const enteredCuisine = cuisineRef.current.value;

        const userInputData = {
            term: enteredCuisine,
            price: enteredPrice,
            location: enteredZip,
        };

        console.log(userInputData);
        props.onGetData(userInputData);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={findRestaurantHandler}>
                <div className={classes.control}>
                    <label htmlFor='location'>Enter Zipcode</label>
                    <input type='text' id='location' ref={zipCodeRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='term'>Enter Cuisine Type</label>
                    <input type='text' id='term' ref={cuisineRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='price'>Enter Price Point</label>
                    <input type='text' id='price' ref={priceRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Find Restaurant</button>
                </div>
            </form>
        </Card>
    );
}

export default UserInputForm;