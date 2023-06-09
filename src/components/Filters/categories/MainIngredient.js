import FilterBTN from "../FilterBTN";

const MainIngredient = ({ setActionCat, setAction}) => {
    let ingredients = ['Beef', 'Chicken', 'Goat', 'Lamb', 'Pasta', 'Pork', 'Seafood', 'Vegetarian', 'Vegan', 'Miscellaneous'];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                    Ingredient
                </button>
            </h2>
            <div id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionFilter">
                    <div className="accordion-body d-flex flex-column flex-wrap gap-2">
                       { 
                       ingredients.map((item, index) => (
                            <FilterBTN 
                                key={index}
                                index={index}
                                name="ingredient"
                                setActionCat={setActionCat}
                                task={setAction}
                                input={item}
                                inputCat='c='/>
                       ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default MainIngredient;