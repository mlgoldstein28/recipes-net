
const FilterBTN = ({name, index, input, inputCat, setActionCat, task, meals}) => {
    return (
      <div>  
        <style jsx>
            {`
                input[type="radio"]  { display: none;}
                
                .x:checked + label {
                    background-color: #0b5ed7;
                    color: white
                }
            `}
        </style>
        <div className="form-check">
            <input className="form-check-input x" type="radio" id={`${name}-${index}`} name={name} />
            <label for={`${name}-${index}`} 
                    onClick={(x) => {task(inputCat + input); setActionCat('filter');
                            }}
                    className="btn btn-outline-primary">
                        {input}
                    </label>
        </div>
      </div>
    )
}

export default FilterBTN;