
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProdottoDettaglio() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Caricamento...</p>;

    return (
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} width="150" />
            <p>{product.description}</p>
            <p>Prezzo: €{product.price}</p>
        </div>
    );
}
