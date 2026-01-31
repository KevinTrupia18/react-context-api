
import { createContext, useState } from "react";

// 1️⃣ Creiamo il contesto
export const BudgetContext = createContext();

// 2️⃣ Creiamo il Provider
export function BudgetProvider({ children }) {

    // stato globale
    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
            {children}
        </BudgetContext.Provider>
    );
}
