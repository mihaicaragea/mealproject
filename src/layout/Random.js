import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";

const Meal = styled.div`
    margin: 40px;
    padding: 20px;
    background-color: #f0d880;
    border-radius: 20px;
`

const Image = styled.img`

    max-width: 100%;
    width: auto;
    height: auto;
`

const Title = styled.h1`


`

function Random(props) {

    const [randomMeal, setRandomMeal] = useState([{}]);

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${properties.firstKey}`)
            .then(response => {
                setRandomMeal(response.data.recipes[0])
            })
    }, [] )



    return (
        <>


            <Title>{randomMeal.title}</Title>

            <Meal dangerouslySetInnerHTML={{ __html: randomMeal.summary }}></Meal>

            <Image src={randomMeal.image} alt=""/>
            </>
    );
}

export default Random;