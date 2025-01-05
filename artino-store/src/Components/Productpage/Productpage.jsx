import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import './Productpage.css';

const Productpage = () => {
    const { id } = useParams();  // Getting id from route parameters
    const [productpage, setProductpage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/allproducts.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                const selectedProduct = data.find(product => {
                    console.log('Checking product id:', product.id);
                    return product.id === parseInt(id);
                });
                console.log('Selected product:', selectedProduct);
                if (!selectedProduct) {
                    throw new Error('Product not found');
                }
                setProductpage(selectedProduct);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div>
                <Header />
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Header />
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!productpage) {
        return (
            <div>
                <Header />
                <p>Product not found</p>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div key={productpage.id}>
                <h1>{productpage.title}</h1>
                <div className="img-desc">
                    <img src={productpage.image} alt={productpage.title} onError={(e) => e.target.style.display='none'} />
                    <p>{productpage.description}</p>
                </div>
                <div className="product-imgs">
                    <img src={productpage.image1} alt="Additional view 1" onError={(e) => e.target.style.display='none'} />
                    <img src={productpage.image2} alt="Additional view 2" onError={(e) => e.target.style.display='none'} />
                    <img src={productpage.image3} alt="Additional view 3" onError={(e) => e.target.style.display='none'} />
                </div>
            </div>

            <div>
                <div className="buttons">
                    <button><a href="https://pay.google.com/">Pay with Google</a></button>
                    <button><a href="https://www.apple.com/">Pay with Apple</a></button>
                    <button><a href="https://www.paypal.com/">Pay with PayPal</a></button>
                </div>
                <div className="hr-container">
                    <hr className="hr-line" />
                    <span className="hr-text">or pay using credit card</span>
                    <hr className="hr-line" />
                </div>
                <div className="user-infos">
                    <div className="delevery-infos">
                        <h1>Shipping Adress infos</h1>
                        <input className="name" placeholder="Enter your full name" type="text" required/>
                        <input type="text" className="adress" placeholder="Enter your exact adress" required/>
                        <div className="city-state">
                            <input type="name" placeholder="Your city"/>
                            <input className="state" type="text" placeholder="Your state"/>
                        </div>
                        <div className="zip-country">
                            <input type="number" required placeholder="Your zip code"/>
                            <input className="country" type="text" required placeholder="Your country"/>
                        </div>

                    </div>
                    <div className="credit-card">
                        <h2>Card holder full name</h2>
                        <input type="text" className="card-name" placeholder="Enter your full name" required />
                        <h3>Card Number</h3>
                        <input type="text" className="card-number" placeholder="0000 0000 0000 0000" required />
                        <div className="ex-ccv">
                            <input type="text" id="expiry-date" placeholder="MM/YY" required />
                            <input type="number" className="CCV" id="cvv" placeholder="CVV" required />
                        </div>
                        <button className="place-order">Place Order</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Productpage;
