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
  margin: 40px;
  width: 80%;
  border: solid #d1d1d1;
`


function MealDetails(props, img) {

    let id = props.match.params.id;
    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = 'abe686b22394465e99701788de4774cc';

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
        <>
            <div class="meal-details-container">
                <h1 className="meal-title">{mealSummary.title}</h1>
            
                <img src={img} className="card-img" alt="..."/>
                <Meal dangerouslySetInnerHTML={{ __html: mealSummary.summary }} />

                <div>
                    <Table className="table table-striped table-light">
                        <thead className="table-warning">
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
                    </Table>
                </div>
            </div>    
        </>
    );
}

export default MealDetails;