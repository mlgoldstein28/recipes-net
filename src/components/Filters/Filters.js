import Nationality from './categories/Nationality';
import MainIngredient from './categories/MainIngredient';
import Type from './categories/Type';
import { Link } from 'react-router-dom';

const Filters = ({setActionCat, setAction}) => {
    
    return (
        <div>
          <h4 className="mt-3">Filters</h4>
          <div className="m-3">
            <a href="/" className="text-decoration-none">Clear Filters</a>
          </div>
          <div className="accordion" id="accordionFilter">
            <Nationality setActionCat={setActionCat} setAction={setAction}/>
            <MainIngredient setActionCat={setActionCat} setAction={setAction} />
            <Type setActionCat={setActionCat} setAction={setAction} />
          </div>
          <div>
            <Link to="/random"><button className="btn btn-outline-success mt-3">Random Recipe</button></Link>
          </div>
        </div>
    )
}

export default Filters