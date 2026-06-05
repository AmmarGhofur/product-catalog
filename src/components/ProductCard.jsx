import { Star } from 'lucide-react';

const ProductCard = ({ product, onDetailClick, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container" onClick={() => onDetailClick(product)}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title" onClick={() => onDetailClick(product)}>
          {product.title}
        </h3>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <Star size={16} fill="#facc15" color="#facc15" />
            <span>{product.rating.rate} ({product.rating.count})</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn-detail" onClick={() => onDetailClick(product)}>Detail</button>
          <button className="btn-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
