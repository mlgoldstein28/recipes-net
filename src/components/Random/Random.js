import { useState, useEffect } from 'react';
import styles from './Random.module.scss'

const Random = () => {
    let [fetchedData, setFetchedData] = useState([]);
    let { meals } = fetchedData;
  
    let api = `https://www.themealdb.com/api/json/v1/1/random.php`
  
    useEffect(() => {
      (async function() {
        let data = await fetch(api).then((res) => res.json());
        setFetchedData(data)
      })();
    }, [api])

    let display;

    if (meals) {
    display = meals.map((x) => 
        {let { idMeal, strMeal, strArea, strCategory, strMealThumb, strInstructions, strSource, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20  } = x;

    return (
        <div key={idMeal} className={`${styles.font} container-fluid h-75`}>
            <h2 className="text-center mt-3 fs-1">The Recipe of the Moment</h2>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-12 mt-5 ml-2 text-center">
                    <h3 className="fw-bold fs-2">{strMeal}</h3>
                    <h4 className="">{strCategory} | {strArea}</h4>
                    <p className="fs-5 fw-bold mt-5">Ingredients Needed: </p>
                    <ul className="list-group mb-3 w-75 m-auto" style={{listStyle: 'none'}}>
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
                                               <li key={index} className="list-group-item list-group-item-secondary text-dark fw-bold">{ingredient}</li>
                                            )
                                        }
                                }) 
                                return (<>{listIngredients}</>)
                            }
                             )
                            ()}
                    </ul>
                    <div className="d-flex flex-col justify-content-center text-center">
                        {strSource && <a style={{textDecoration: 'none'}} className="btn btn-outline-primary fw-bold m-3" href={strSource}>Full Recipe</a>}

                        {strYoutube && <a style={{textDecoration: 'none'}} className="btn btn-outline-primary fw-bold m-3" href={strYoutube}>Video Here</a>}

                    </div>
                    <div>
                        <a style={{textDecoration: 'none', color: 'white'}} className=" btn btn-success m-3 fw-bold" href="/random" >Another Random Recipe</a>
                    </div>
                </div>
                <div className="col-lg-8 col-12 mt-5 ml-3">
                    <img className={`${styles.image} d-block img-fluid mb-3`} src={strMealThumb} alt="" />
                </div>
            </div>
        </div>
            )
        })
    }
    return <>{display}</>
}


export default Random;