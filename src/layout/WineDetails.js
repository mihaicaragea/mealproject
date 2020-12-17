import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";

const WineDescription = styled.div`
margin: 40px;
padding: 20px;
background-color: #ffe3d8;
border-radius: 20px;
`

const FoodPairing = styled.div`
margin: 40px;
`

function WineDetails(props) {

    let wineName = props.match.params.name;


    const [wineDetails, setWineDetails] = useState("");
    const [wineFoodPairing, setWineFoodPairing] = useState([]);
    const [wineError, setWineError] = useState("");

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/description?apiKey=${properties.firstKey}&wine=${wineName}`)
            .then(response => {
                setWineDetails(response.data.wineDescription);
            })

        axios.get(`https://api.spoonacular.com/food/wine/dishes?apiKey=${properties.firstKey}&wine=${wineName}`)
            .then(response => {
                if(response.data.status === "failure"){
                    setWineError(response.data.message);
                }else{
                    setWineFoodPairing(response.data.pairings);
                }

            })
    }, [wineName])


    return (
        <>


            <WineDescription>Description : {wineDetails}</WineDescription>


            <FoodPairing>
            {wineError.length < 2 ? wineFoodPairing.map((food, index) => {
                    return <p key={index}>{food.charAt(0).toUpperCase() + food.slice(1)}</p>
                }) : wineError.replace("_", " ")}
            </FoodPairing>
        </>



    );
}

export default WineDetails;