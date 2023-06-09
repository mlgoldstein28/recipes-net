import React from 'react'
import FilterBTN from '../FilterBTN';

const Nationality = ({setActionCat, setAction, meals}) => {
    let nationalities = ['American', 'British', 'Canadian', 'Chinese', 
    'Croation', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 
    'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 
    'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Vietnamese', 'Unknown'];

    return (
        <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            >Nationality
                    </button>
                </h2>
                <div id="collapseOne" 
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFilter"
                >
                    <div className="accordion-body d-flex flex-wrap flex-column gap-2">
                        {
                            nationalities.map((item, index) => (
                                <FilterBTN
                                    task={setAction}
                                    input={item}
                                    name="nationality"
                                    key={index}
                                    index={index}
                                    setActionCat={setActionCat}
                                    inputCat='a='
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Nationality;