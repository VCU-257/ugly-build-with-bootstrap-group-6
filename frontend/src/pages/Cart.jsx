import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  // Simulated cart data (since Listing doesn't pass real data yet)
  const [cartItems, setCartItems] = useState([
    {
      name: "Placeholder Name",
      price: "$99.99",
      description: "Placeholder Description",
      image: "https://picsum.photos/id/252/200/300"
    },
    {
      name: "Placeholder Name",
      price: "$99.99",
      description: "Placeholder Description",
      image: "https://picsum.photos/id/237/200/300"
    }
  ]);

  const [savedItems, setSavedItems] = useState([]);

  // Move item to saved
  const saveForLater = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
    setSavedItems([...savedItems, item]);
  };

  // Move item back to cart
  const moveToCart = (item) => {
    setSavedItems(savedItems.filter((i) => i !== item));
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="container py-4">
      
      <h2 className="mb-4">Your Cart</h2>

      {/* CURRENT CART */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="row mb-4 border p-3 rounded">
            <div className="col-md-3">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <h5>{item.price}</h5>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-center">
              <button
                className="btn btn-secondary mb-2"
                onClick={() => saveForLater(item)}
              >
                Save for Later
              </button>
            </div>
          </div>
        ))
      )}

      <Link to="/checkout" className="btn btn-primary mb-5">
        Proceed to Checkout
      </Link>

      {/* SAVED ITEMS */}
      <h3 className="mb-3">Saved for Later</h3>

      {savedItems.length === 0 ? (
        <p>No saved items.</p>
      ) : (
        savedItems.map((item, index) => (
          <div key={index} className="row mb-4 border p-3 rounded bg-light">
            <div className="col-md-3">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <h5>{item.price}</h5>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-center">
              <button
                className="btn btn-primary"
                onClick={() => moveToCart(item)}
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}