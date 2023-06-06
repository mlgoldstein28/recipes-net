import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Directions from './Directions';

const MealDetails = () => {
    
    let [fetchedData, updateFetchedData] = useState([]);

    let { meals } = fetchedData


    const { idMeal } = useParams();

    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    console.log(api)

    useEffect(() => {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    console.log(meals)

    let details;

    if (meals) {
        details = meals.map((meal) => {let { strMeal,  strArea, strCategory, strMealThumb, 
            strIngredient1, strIngredient2, strIngredient3, 
            strIngredient4, strIngredient5, strIngredient6, strIngredient7, 
            strIngredient8, strIngredient9, strIngredient10, strIngredient11, 
            strIngredient12, strIngredient13, strIngredient14, strIngredient15, 
            strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strInstructions, strYouTube, strSource } = meal
        console.log(strMeal)
        
        return (
            <div className="container row m-3">
                <div className="col-lg-3 col-12 text-center mt-3">
                    <h2 className="fw-bold">{strMeal}</h2>
                    <p className="fw-bold">{strCategory} | {strArea}</p>
                    <br />
                    <p className="fs-4 fw-bold text-left">Ingredients: </p>
                    <ul className="mt-2 m-2 w-75 list-group m-auto" style={{ textAlign: 'left', listStyle: ''}}>
                        {
                            (() => { 
                                let ingredients = [strIngredient1, strIngredient2, strIngredient3, 
                                strIngredient4, strIngredient5, strIngredient6, strIngredient7, 
                                strIngredient8, strIngredient9, strIngredient10, strIngredient11, 
                                strIngredient12, strIngredient13, strIngredient14, strIngredient15, 
                                strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20]

                                let listIngredients;

                                listIngredients = ingredients.map((ingredient, index) => {
                                        if (ingredient) {
                                            return (
                                               <li key={index} className="list-group-item list-group-item-secondary text-dark fs-5 fw-bold text-center">{ingredient}</li>
                                            )
                                        }
                                }) 
                                return (<>{listIngredients}</>)
                            }
                             )
                            ()}
                    </ul>
                    <div className="text-center mt-3">
                        <a href={strYouTube}><button className="btn btn-outline-primary m-auto fw-bold">Watch Video Here</button></a>
                    </div>
                    {strSource && (
                        <div className="text-center mt-3">
                        <a href={strSource}><button className="btn btn-outline-info m-auto fw-bold">Full Recipe Here</button></a>
                    </div>)
                    }
                </div> 
                <div className="col-lg-9 col-12 text-center mt-3">
                    <img className="img-fluid rounded" src={strMealThumb} alt='' />
                </div>
            </div>
            
        )
    })
    return <>{details}</>
    }
    
}

export default MealDetails;