import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add, remove } from '../slices/cartslice';
import { useDispatch, useSelector } from 'react-redux';

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

const productscontainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px"

};



const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((Response) => Response.json())
            .then((data) => setProducts(data));
    }, []);


    const dispatch = useDispatch();
    const cartProducts = useSelector((cartslice) => cartslice.cartslice);
    console.log(cartProducts);

    const cards = products.map((product) => (

        <Card border="primary" style={{ width: '18rem', border: '1px solid black' }} key={product.id}>
            <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "100px" }} />
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    INR {product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(add(product))}>Buy</Button>
                <Button variant="primary" onClick={() => dispatch(remove(product.id))}>Remove</Button>
            </Card.Body>
        </Card>

    ));

    return (
        <>
            <h1>Cart</h1>
            <>{cartProducts.map((product) => {
                return <div key={product.id}>{product.title}</div>
            })}</>
            <h1>Product Dashboard</h1>
            <div className='products-container' style={productscontainer}>{cards}</div>
        </>
    )
}

export default Product;