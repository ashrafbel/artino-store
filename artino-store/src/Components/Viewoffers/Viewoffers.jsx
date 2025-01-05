import React, { useState, useEffect } from "react";
import './Viewoffers.css';

const Viewoffers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="products-container">
            <h1>Our Offers</h1>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button className="shopnow">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Viewoffers;
