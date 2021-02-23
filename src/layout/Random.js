import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Random(props) {



    const [randomMeal, setRandomMeal] = useState([{}]);
    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = '1689071996f543429fedccf5f0885331';


    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${anotherKey}`)
            .then(response => {
                setRandomMeal(response.data.recipes[0])
            })
    }, [] )



    return (
        <>
    

            <h1>{randomMeal.title}</h1>

            <p className="recipe-summary" dangerouslySetInnerHTML={{ __html: randomMeal.summary }}></p>

            <img src={randomMeal.image} alt=""/>
            </>
    );
}

export default Random;