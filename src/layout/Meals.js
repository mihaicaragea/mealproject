import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function Meals(props) {

    const [mealList, setMealList] = useState([]);
    const [ingredient, setIngredient] = useState(''); //chicken
    const key = '1dfec2d9def1413d92b176006307e197';

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ingredient);
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${ingredient}`)
            .then(response => {
                setMealList(response.data.results)
                console.log(response.data.results)
            })
    }


    return (
        <>
        <div>Please enter the ingredient</div>


            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="ingredient">Ingredient</label>
                <input type="text" id="ingredient" name="ingredient" value={ingredient} onChange={handleChange}/>
                <button type='submit'>Submit search</button>
            </form>

            <div>
                {mealList.map((meal, index) => {
                    return <Link to={`/meal/${meal.id}`}>
                             <h1 key={index}>{meal.title}</h1>
                            </Link>
                })}
            </div>

        </>

    );
}

export default Meals;