import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MealDetails(props) {

    let id = props.match.params.id;
    const key = '1dfec2d9def1413d92b176006307e197';

    const [mealSummary, setMealSummary] = useState({});
    const [mealIngredients, setMealIngredients] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${key}`)
            .then(response => {
                setMealSummary(response.data)
            })
        axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`)
            .then(response => {
                setMealIngredients(response.data.ingredients)
            })
    }, [id])



    return (
        <>
            <h1>{mealSummary.title}</h1><br/>
            <p>{mealSummary.summary}</p>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Amount</th>
                </tr>
                </thead>

                <tbody>
                {mealIngredients.map((ingredient, index) => {
                    return <tr>
                                <th scope="row">{index}</th>
                                <td>{ingredient.name}</td>
                                <td>{ingredient.amount.metric.value} g</td>
                            </tr>
                })}


                </tbody>
            </table>
        </>
    );
}

export default MealDetails;