import React, {useState} from "react";

function ExpenseForm() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        amount: "",
        category: "",
        date: "",
        submit: "",
    });

    function handleInput(event) {
        setFormDetails();
    }

    function handleSubmit(event) {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Expense Name: 
                <input 
                type="text"
                name="Expense Name"
                value={formDetails.name}
                onChange={handleInput}/>
            </label>
            <button>Submit</button>
        </form>
    );
}

export default ExpenseForm