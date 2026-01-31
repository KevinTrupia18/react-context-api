
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BudgetContext } from "../context/BudgetContext";

export default function Prodotti() {
    const [products, setProducts] = useState([]);
    const { budgetMode } = useContext(BudgetContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const prodottiFiltrati = budgetMode
        ? products.filter(p => p.price <= 30)
        : products;

    return (
        <div>
            <h2>Prodotti</h2>

            {prodottiFiltrati.map(product => (
                <div key={product.id}>
                    <Link to={`/prodotti/${product.id}`}>
                        <h4>{product.title}</h4>
                    </Link>
                    <p>Prezzo: €{product.price}</p>
                </div>
            ))}
        </div>
    );
}

