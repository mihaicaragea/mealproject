import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";




function Meals(props) {

    const [mealList, setMealList] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [page, setPage] = useState(0);

    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = 'b2a20becde5f4f27a73df01bbee44c7c';

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${anotherKey}&query=${ingredient}&number=10&offset=${page}`)
            .then(response => {
                setMealList(response.data.results)
            })
    }, [page])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${anotherKey}&query=${ingredient}&number=10&offset=${page}`)
            .then(response => {
                setMealList(response.data.results)
            })
    }

    function previousPage() {
        if (page > 0) {
            setPage(page - 10);
        }
    }

    function nextPage() {
        setPage(page + 10);
    }


    return (
        <div className="meals-container">
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <input className="search-input"  type="search" placeholder="Enter the ingredient" aria-label="Search" name="ingredient" value={ingredient} onChange={handleChange}/>
                    <button className="" type="submit">Search</button>
                </form>
            </div>
            <div className="cards-wrapper" >
            <button className="prev-butn" onClick={previousPage} >
                    Previous
            </button>
            <div className="cards-box">
                    {mealList.map((meal, index) => {
                        return<>
                            <div className="card" key={index}>
                                <img src={meal.image} className="card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{meal.title}</h5>
                                    <Link to={{ pathname : `/meal/${meal.id}`, state : `${meal.image}`}} ><p key={index}>See meal details</p></Link>
                                </div>
                            </div>
                            </>
                    })}
            </div>
            <button className="next-butn" onClick={nextPage} >
                    Next
            </button>            
            </div>
        </div>

    );
}

export default Meals;