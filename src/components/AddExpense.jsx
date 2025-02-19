import React, {useState} from "react";

function ExpenseForm( { addExpense } ) {
    const [formDetails, setFormDetails] = useState({
        name: "",
        amount: "",
        category: "",
        date: "",
    });

    function handleInput(event) {
        const {value, name} = event.target;
        // console.log(event.target);

        setFormDetails((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(!formDetails.name || !formDetails.amount || !formDetails.category || !formDetails.date) {
            alert("Please fill in all fields");
            return;
        }
        
        addExpense(formDetails);
        setFormDetails({
            name: "",
            amount: "",
            category: "",
            date: "",
        })
    }

    return (
        <div>
            <h2>Add an Expense</h2>
            <form onSubmit={handleSubmit}>

                <label>Expense Name: 
                    <input 
                    type="text"
                    name="name"
                    value={formDetails.name}
                    onChange={handleInput}/>
                </label>

                <label>Amount: 
                    <input 
                    type="number"
                    name="amount"
                    value={formDetails.amount}
                    onChange={handleInput}/>
                </label>

                <label>Category: 
                    <select 
                        name="category"
                        value={formDetails.category}
                        onChange={handleInput}
                    >
                        <option value="" >Select Category</option>
                        <option value="Food" >Food</option>
                        <option value="Travel" >Travel</option>
                        <option value="Utility" >Utility</option>
                        <option value="Utran" >Utran</option>
                    </select>
                </label>

                <label>Due-Date:
                    <input 
                    type="date"
                    name="date"
                    value={formDetails.date}
                    onChange={handleInput}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ExpenseForm