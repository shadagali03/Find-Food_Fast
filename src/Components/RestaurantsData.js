import Card from './UI/Card.js';
import classes from './RestaurantsData.module.css';

function RestaurantsData(props) {
   return (
      <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h3>{props.address}</h3>
          <p>Rating: {props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add to Favorites</button>
        </div>
      </Card>
    </li> 
   ); 
}

export default RestaurantsData;