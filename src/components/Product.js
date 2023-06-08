import React, { useEffect, useState } from 'react'

/*
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
} */

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((Response) => Response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            {console.log(products)}
            {products.forEach(product => (<h3>product.description</h3>))}
            <h1>Product Dashboard</h1>

        </>
    )
}

export default Product;