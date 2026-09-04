import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/style/product-detail.css';
import { useCart } from '../contexts/CartContext'; // Make sure this import is correct

const products = [
  { id: 1, name: 'jacket', price: 1000, category: 'Electronics', image: '/images/aokhoac.jpg', description: 'A high-performance laptop' },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics', image: '/images/phone.jpg', description: 'A smartphone with latest features' },
  { id: 3, name: 'Shoes', price: 500, category: 'Clothing', image: '/images/shoes.jpg', description: 'Comfortable and stylish shoes' },
];

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Using hook to add product to cart
  const [message, setMessage] = useState('');
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Không tìm thấy sản phẩm</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    setMessage('Bạn đã thêm sản phẩm vào giỏ hàng thành công!');
    setTimeout(() => setMessage(''), 500);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">Giá: ${product.price}</p>
          <p className="product-category">Loại: {product.category}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
          {message && <div className="success-message">{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
