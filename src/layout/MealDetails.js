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


function MealDetails(props) {

    let id = props.match.params.id;
    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = '1689071996f543429fedccf5f0885331';

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
            <Title>{mealSummary.title}</Title><br/>
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
        </>
    );
}

export default MealDetails;