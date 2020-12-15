import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function Meals(props) {

    const [mealList, setMealList] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = '1689071996f543429fedccf5f0885331';

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ingredient);
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${anotherKey}&query=${ingredient}&number=40`)
            .then(response => {
                setMealList(response.data.results)
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

            <div className='row align-items-center'>
                {mealList.map((meal, index) => {
                    return <div className='col'>
                            <div className="card" key={index}>
                                        <img src={meal.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{meal.title}</h5>
                                            <Link to={`/meal/${meal.id}`}><p key={index}>See meal details</p></Link>
                                        </div>
                                  </div>
                            </div>
                })}
            </div>

        </>

    );
}

export default Meals;