import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionOutline from '../components/SectionOutline.jsx';

export default function Listing() {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <SectionOutline label="Listing page">
      <div className="container py-4">
        
        <h2 className="mb-4">Placeholder Name</h2>

        <div className="row">
          
          <div className="col-md-5">
            <img 
              src="https://picsum.photos/id/252/200/300" 
              alt="Placeholder Product" 
              className="img-fluid rounded mb-3 border border-secondary w-100 object-fit-cover"
              style={{ height: '350px' }}
            />
            
            <h4 className="mb-3">Price: $99.99</h4>
            <p className="text-muted">
              Placeholder Description
            </p>
          </div>

          <div className="col-md-2 d-flex flex-column gap-3">
            <button 
              className={`btn ${isAddedToCart ? 'btn-warning' : 'btn-primary'}`}
              onClick={() => setIsAddedToCart(true)}
            >
              Add to Cart
            </button>
            <button className="btn btn-secondary">
              Favorite
            </button>
          </div>

          {isAddedToCart && (
            <div className="col-md-5">
              <div 
                className="bg-secondary bg-opacity-25 p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center border border-secondary"
              >
                <h4 className="mb-5">Item Added</h4>
                
                <div className="d-flex flex-column gap-3 w-50">
                  <Link 
                    to="/" 
                    className="btn btn-light border-secondary"
                  >
                    Continue Shopping
                  </Link>
                  
                  <Link to="/checkout" className="btn btn-light border-secondary">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </SectionOutline>
  );
}
