import FilterBTN from "../FilterBTN";

const Type = ({setAction, setActionCat}) => {
    let types = ['Breakfast', 'Starter', 'Side', 'Dessert']

    return (
        <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                        Type
                    </button>
                </h2>
                <div id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFilter"
                >
                    <div className="accordion-body d-flex flex-column flex-wrap gap-2">
                        {
                            types.map((item, index) => (
                                <FilterBTN 
                                    key={index}
                                    index={index}
                                    name='types'
                                    setActionCat={setActionCat}
                                    task={setAction}
                                    inputCat={'c='}
                                    input={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Type;