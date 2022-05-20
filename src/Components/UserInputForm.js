import {useRef} from 'react'
import Card from './UI/Card'
import classes from './UserInputForm.module.css'
function UserInputForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='ZipCode'>Enter Zipcode</label>
                    <input type='text' required id='zip' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Cuisine'>Enter Cuisine Type</label>
                    <input type='text' required id='cuisine' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='PricePoint'>Enter Price Point</label>
                    <input type='text' required id='price' />
                </div>
                <div className={classes.actions}>
                    <button> Find Restaurant</button>
                </div>
            </form>
        </Card>
    );
}

export default UserInputForm;