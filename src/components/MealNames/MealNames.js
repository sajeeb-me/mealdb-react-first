import React from 'react';
import './MealNames.css'

const MealNames = ({ items }) => {
    return (
        <div className='name-list'>
            <h2 className='title'>Name List</h2>
            <div>
                <ol>
                    {
                        items.map(item => < li key={item}> {item}</li>)
                    }
                </ol>
            </div>
        </div >
    );
};

export default MealNames;