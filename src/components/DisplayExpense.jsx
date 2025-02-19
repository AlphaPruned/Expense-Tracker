import React, {useState} from "react";

function DisplayExpense( { expenseList } ) {
    return (
        <div>
            <h2>List of Expenses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayExpense;