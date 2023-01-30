import React from 'react';
import MealsSummary from '../MealsSummary/MealsSummary';
import AvailablesMeals from '../AvailableMeals/AvailablesMeals';

const Meals = () => {
    return (
        <>
          <MealsSummary/>
          <AvailablesMeals/>  
        </>
    );
}

export default Meals;
