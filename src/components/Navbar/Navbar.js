import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><span className="m-3 fs-3 fw-bold">Recipes </span><span className={`fs-6 ${styles.subHead}`}>with MealDB's API</span></a>
        <div className="ms-auto">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/random" className="nav-link"><span className="fw-bold m-3">Random Recipe</span></NavLink>
                </li>
            </ul>
        </div>
    </nav>
   )
}

export default Navbar;