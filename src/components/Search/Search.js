import styles from './Search.module.scss'
import { useState } from 'react'

const Search = ({setAction, setActionCat}) => {

    const [message, setMessage] = useState('')

    function handleChange(e) {
        e.preventDefault();
        setMessage(e.target.value)
        setActionCat('search');
        setAction('s=' + message);
        if (!message) {
            setActionCat('filter');
            setAction('i');
        }
    }
    

     return (
        <div className="">
            <div className="input-group w-75 m-auto">
                <input type="text" 
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    onClick={handleChange}
                    className={`form-control border-primary shadow`} 
                    placeholder="Your Next Great Meal" 
                    aria-label="searchInput"
                    aria-describedby=""
                    >
                </input>
                <div className="input-group-append">
                    <button onClick={handleChange} className={`btn btn-outline-primary shadow ${styles.searchBut}`} type="button">Search</button>
                </div>
            </div>
        </div>
     )
}

export default Search;