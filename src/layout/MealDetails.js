import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";

const Meal = styled.div`
margin: 40px;
padding: 20px;
background-color: #f0d880;
border-radius: 20px;
`

const Title = styled.h1`
  align-items: center;
`

const Table = styled.table`
  margin: 0;
  width: 80%;
  border: solid #d1d1d1;
`


function MealDetails(props) {

    let id = props.match.params.id;
    let img = props.location.state


    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = 'b2a20becde5f4f27a73df01bbee44c7c';

    const [mealSummary, setMealSummary] = useState({});
    const [mealIngredients, setMealIngredients] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${anotherKey}`)
            .then(response => {
                setMealSummary(response.data)
            })
        axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${anotherKey}`)
            .then(response => {
                setMealIngredients(response.data.ingredients)
            })
    }, [id])



    return (
        <div className="items-container">  
            <h1 className="meal-title">{mealSummary.title}</h1>
            <div className="meal-details-container">
            <div className="img-ingredients-wrapper">
                <img src={img} className="recipe-img" alt="..."/>
                <table className="ingredients-table">
                    <thead className="">
                    <tr>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {mealIngredients.map((ingredient, index) => {
                        return <tr>
                    
                                    <td>{ingredient.name}</td>
                                    <td>{ingredient.amount.metric.value} g</td>
                                </tr>
                    })}
                    </tbody>
                </table>
            </div>    
            <div className="recipe-summary">
                <p dangerouslySetInnerHTML={{ __html: mealSummary.summary }} />
            </div>
        </div>    
    </div>
    
    );
}

export default MealDetails;