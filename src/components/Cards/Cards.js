import styles from './Cards.module.scss' 
import {Link} from 'react-router-dom';

const Cards = ({meals, lastIndex}) => {

  let display;

  if (meals) {
    display = meals.map((x, index) => {let { idMeal, strMeal, strMealThumb } = x
    //Pagination
      
      return ( 
        <div key={idMeal} className="col-lg-3 col-md-4 col-sm-4 col-12">
          <Link to={`${idMeal}`}
                key={idMeal}
                style={{textDecoration: 'none'}}
                className="col-lg-3 col-md-4 col-sm-4 col-12 text-dark">
            <div className="d-flex flex-column justify-content">
              <div className={`${styles.card} mb-3`}>
                <img className={`${styles.img} img-fluid mb-2`} src={strMealThumb} alt="" />
                <div className="fs-6 fw-bold m-3 mt-0 mb-1 d-flex justify-content-start">{strMeal}</div>
              </div>
            </div>
          </Link>
        </div>
      )
  })}
return <>{display}</>
}



export default Cards;