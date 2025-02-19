import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/add">
                <button>Add New Expense</button>
            </Link>
            <Link to="/display">
                <button>Display Expenses</button>
            </Link>
        </div>
    );
}

export default Home;