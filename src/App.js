import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from 'react';
import Random from './components/Random/Random';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters'
import MealDetails from './components/Cards/MealDetails';
import Pagination from './components/Pagination/Pagination'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random' element={<Random />} />
        <Route path='/:idMeal' element={<MealDetails  />} />
      </Routes>
    </BrowserRouter>
  )
}

const Home = () => {
  let [ fetchedData, setFetchedData ] = useState([]);
  let { meals } = fetchedData;

  //For Search
  let [actionCat, setActionCat] = useState('filter');
  let [action, setAction] = useState('i');

  let api =`https://www.themealdb.com/api/json/v1/1/${actionCat}.php?${action}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
    }, [api]);

  //For Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(16);
    const lastIndex = currentPage * 16;
    const firstIndex = lastIndex - recordsPerPage;

    let currentRecords;
    let nPages = 0;
    if (meals) {
     currentRecords = meals.slice(firstIndex, lastIndex);
     nPages = Math.ceil(meals.length / recordsPerPage)}


  return (
    <div className="App">
      <h1 className="text-center mt-3">Recipes</h1>
      <Search setActionCat={setActionCat}
              setAction={setAction}
              meals={meals}
              action={action}
              />
      <hr />
      <div className="container">
        <h2 className="m-3">Find Your Recipe</h2>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-5">
          <Filters setActionCat={setActionCat}
                    setAction={setAction}
                    meals={meals}/>
          </div>
          <div className="col-lg-8 col-md-9 col-sm-8 col-7">
            <div className="row">
            {meals && 
              <Cards meals={currentRecords}
                    lastIndex={lastIndex} />}
            </div>
          </div>
        </div>
      </div>
      <Pagination meals={meals}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  currentRecords={currentRecords}
                  nPages={nPages}
                  />
    </div>
  );
    }

export default App;
