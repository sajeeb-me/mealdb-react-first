import React from 'react';
import './MealCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const MealCard = ({ meal, addToList }) => {
    const { strMealThumb, strMeal, strInstructions } = meal
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className="card-info">
                <h3>{strMeal}</h3>
                <p>{strInstructions.slice(0, 200)}</p>
            </div>
            <button onClick={() => addToList(meal.strMeal)} className='card-btn'>
                <p style={{ margin: '10px' }}>Add to List</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default MealCard;