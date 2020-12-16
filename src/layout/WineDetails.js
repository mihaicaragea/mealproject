import React, {useEffect, useState} from 'react';
import axios from 'axios';

function WineDetails(props) {

    let wineName = props.match.params.name;

    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = '1689071996f543429fedccf5f0885331';

    const [wineDetails, setWineDetails] = useState("");
    const [wineFoodPairing, setWineFoodPairing] = useState([]);
    const [wineError, setWineError] = useState("");

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/wine/description?apiKey=${anotherKey}&wine=${wineName}`)
            .then(response => {
                setWineDetails(response.data.wineDescription);
            })

        axios.get(`https://api.spoonacular.com/food/wine/dishes?apiKey=${anotherKey}&wine=${wineName}`)
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


        <h1>Description : {wineDetails}</h1>

            {wineError.length < 2 ? wineFoodPairing.map((food, index) => {
                    return <p key={index}>{food}</p>
                }) : wineError.replace("_", " ")}




        </>



    );
}

export default WineDetails;