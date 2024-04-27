import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function Product() {
    const [selectedProduct, setSelectedproduct] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/")
            .then((res) => { setData(res.data) })
    }, [])

    const products = data.map((products, index) => {
        return (


            <div key={index}>
                <h4>{products.id}</h4>
                <h1>{products.name}</h1>
                <p>{products.description}</p>
                <p>{products.price}</p>
                <p>{products.image}</p>
            </div>
        )
    })

    


    const handleproductsClick = (products) => {
        setSelectedproduct(products);
    };

    const handleCloseDetails = () => {
        setSelectedproduct(null);
    };

    return (
        <div className="products-container3">
            {data.map((products) => (
                <div
                    className="product-card3"
                    key={products.id}
                    onClick={() => handleproductsClick(products)}
                >
                    <div className="product-image">
                        <img src={products.imageSrc} alt={products.title} />
                    </div>
                    <div className="product-details3">
                        <h3 className="product-title3">{products.name}</h3>
                        <p className="product-description3">{products.description}</p>
                        <p className="product-price3">₹{products.price}</p>
                        {/* Render buy and add to cart buttons here ^.toFixed(2)*/}

                    </div>
                </div>
            ))}
            {selectedProduct && (
                <div className="product-details-overlay">
                    <div className="product-details-container">
                        <button
                            className="btn-close"
                            onClick={handleCloseDetails}
                        >
                            close
                        </button>
                        <div className="product-details-content">
                            <div className="product-details-image">
                                <img
                                    src={selectedProduct.imageSrc}
                                    alt={selectedProduct.title}
                                />
                            </div>
                            <div className="product-details-info">
                                <h3 className="product-details-title">
                                    {selectedProduct.name}
                                </h3>
                                <p className="product-details-description">
                                    {selectedProduct.description}
                                </p>
                                <p className="product-details-price">
                                    {selectedProduct.price}
                                </p>
                            </div>

                            {/* Render buy and add to cart buttons here ^.toFixed(2)*/}
                            <div className="product-details-buttons">
                                <button className="btn-buy">Buy</button>
                                <button className="btn-add-to-cart">Add to Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );



}




