import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {properties} from "../properties";

const Meal = styled.div`
margin: 40px;
padding: 20px;
background-color: #ffe3d8;
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

const Button = styled.button`
  margin: 40px;
`


function MealDetails(props) {

    let id = props.match.params.id;

    const [mealSummary, setMealSummary] = useState({});
    const [mealIngredients, setMealIngredients] = useState([]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${properties.firstKey}`)
            .then(response => {
                setMealSummary(response.data)
            })
        axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${properties.firstKey}`)
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

            <div>
                <Link to={`${id}/recipe`}>
                    <Button type="button" className="btn btn-primary">Get Recipe</Button></Link>
            </div>


        </>
    );
}

export default MealDetails;