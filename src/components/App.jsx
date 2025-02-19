import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import AddExpense from "./AddExpense";
import DisplayExpense from "./DisplayExpense";
import Footer from "./Footer";

function App() {
    // const [expenses, setExpenses] = useState([]);
    // const [expenses, setExpenses] = useState([])
    // useEffect(() => {
    //     if(localStorage.getItem("expenseList") && localStorage.getItem("expenseList").length > 0) {
    //         setExpenses(localStorage.getItem("expenseList"));
    //     }
    // }, [expenses]);

    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenseList");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    function addExpense(newExpense) {
        setExpenses((prevExpenses) => {
            const updatedExpenses = [...prevExpenses, newExpense]
            localStorage.setItem("expenseList", JSON.stringify(updatedExpenses))
            return updatedExpenses;
        });
    }

    useEffect(() => {
        console.log("Updated Expenses List:", expenses);
    }, [expenses]);

    return (
        <Router>
            <Header />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Add Expense</Link>
                <Link to="/display">Display Expenses</Link>
            </nav>
            

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/add" element={<AddExpense addExpense={addExpense}/>}/>
                <Route path="/display" element={<DisplayExpense expenseList={expenses}/>}/>
            </Routes>

            <Footer />
        </Router>
        );
}

export default App;