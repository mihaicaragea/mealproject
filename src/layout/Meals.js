import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 10px;
`

const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 80px;
`

const Pagination = styled.div`
margin-top: 20px;
`

function Meals(props) {

    const [mealList, setMealList] = useState([]);
    const [ingredient, setIngredient] = useState('');
    const [page, setPage] = useState(0);

    const key = '1dfec2d9def1413d92b176006307e197';
    const anotherKey = '1689071996f543429fedccf5f0885331';

    const handleChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${anotherKey}&query=${ingredient}&number=12&offset=${page}`)
            .then(response => {
                setMealList(response.data.results)
            })
    }, [page])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${anotherKey}&query=${ingredient}&number=12&offset=${page}`)
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
        <>

            <div className="nav justify-content-center">
                <form onSubmit={handleSubmit}>
                    <Input className="form-control mr-sm-2" type="search" placeholder="Enter the ingredient" aria-label="Search" name="ingredient" value={ingredient} onChange={handleChange}/>
                    <Button className="btn btn-sm btn-outline-secondary" type="submit">Search</Button>
                </form>
            </div>


            <div className='row align-items-center'>
                {mealList.map((meal, index) => {
                    return <div className='col-sm-2'>
                        <div className="card" key={index}>
                            <img src={meal.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{meal.title}</h5>
                                <Link to={`/meal/${meal.id}`}><p key={index}>See meal details</p></Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div>
                <button onClick={previousPage} className="btn btn-primary">
                    Previous
                </button>
                <button onClick={nextPage} className="btn btn-primary">
                    Next
                </button>
            </div>

        </>

    );
}

export default Meals;