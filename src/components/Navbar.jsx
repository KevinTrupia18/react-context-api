
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/chi-siamo">Chi siamo</Link> |{" "}
            <Link to="/prodotti">Prodotti</Link>

            <button onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
        </nav>
    );
}

