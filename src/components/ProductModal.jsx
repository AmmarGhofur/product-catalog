import { X, Star } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="modal-details">
            <span className="category-badge">{product.category}</span>
            <h2>{product.title}</h2>
            
            <div className="product-meta modal-meta">
              <span className="product-price">${product.price.toFixed(2)}</span>
              <div className="product-rating">
                <Star size={18} fill="#facc15" color="#facc15" />
                <span>{product.rating.rate} ({product.rating.count} reviews)</span>
              </div>
            </div>
            
            <div className="description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            <button className="btn-cart modal-btn-cart" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
