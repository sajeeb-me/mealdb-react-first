import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStorageItem } from '../../utilities/fakeDb';
import MealCard from '../MealCard/MealCard'
import MealNames from '../MealNames/MealNames'
import './Body.css'

const Body = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const [items, setItems] = useState([]);
    const addToList = (meals) => {
        if (items.indexOf(meals) < 0) {
            setItems([...items, meals])
        }
        addToLocalStorage(meals)
    }
    useEffect(() => {
        const storageItems = getStorageItem();
        const newItems = [];
        if (storageItems) {
            for (const id in storageItems) {
                newItems.push(id);
            }
        }
        setItems(newItems)
    }, [meals])
    return (
        <div className='meal-container'>
            <div className="meal-card">
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal} addToList={addToList} />)
                }
            </div>
            <div className="meal-names">
                <MealNames items={items}></MealNames>
            </div>
        </div>
    );
};

export default Body;