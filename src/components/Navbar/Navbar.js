import {NavLink} from 'react-router-dom';

const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><span className="m-3 fs-3 fw-bold">Recipes </span><span className="fs-6">with MealDB's API</span></a>
        <button type="button" 
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#allRecipes"
            aria-controls="allRecipes"
            aria-expanded="false"
            aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="allRecipes">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/random"className="nav-link"><span className="m-3 fw-bold">Random Recipe</span></NavLink>
                </li>
            </ul>
        </div>
    </nav>
   )
}

export default Navbar;