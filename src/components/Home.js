import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const banners = [
  { id: 1, image: 'https://i.imgur.com/bRJIi8c.jpeg' },
  { id: 2, image: 'https://i.imgur.com/qvFyboO.png' },
];

const products = [
  { id: 1, name: 'Jacket', category: 'Electronics', image: '/images/aokhoac.jpg' },
  { id: 2, name: 'Phone', category: 'Electronics', image: '/images/phone.jpg' },
  { id: 3, name: 'Shirt', category: 'Clothing', image: '/images/shirt.jpg' },
  { id: 4, name: 'Watch', category: 'Accessories', image: '/images/watch.jpg' },
  { id: 5, name: 'Shoes', category: 'Clothing', image: '/images/shoes.jpg' },
  { id: 6, name: 'Shirt', category: 'Clothing', image: '/images/shirt.jpg' },
  { id: 7, name: 'Watch', category: 'Accessories', image: '/images/watch.jpg' },
  { id: 8, name: 'Shoes', category: 'Clothing', image: '/images/shoes.jpg' },
  { id: 9, name: 'Shoes', category: 'Clothing', image: '/images/shoes.jpg' },
  { id: 10, name: 'Shirt', category: 'Clothing', image: '/images/shirt.jpg' },
  { id: 11, name: 'Watch', category: 'Accessories', image: '/images/watch.jpg' },
  { id: 12, name: 'Shoes', category: 'Clothing', image: '/images/shoes.jpg' },
  { id: 13, name: 'Hat', category: 'Accessories', image: '/images/hat.jpg' },
  { id: 14, name: 'Jacket', category: 'Clothing', image: '/images/jacket.jpg' },
  { id: 15, name: 'Tablet', category: 'Electronics', image: '/images/tablet.jpg' },
  { id: 16, name: 'Belt', category: 'Accessories', image: '/images/belt.jpg' },
  { id: 17, name: 'Jeans', category: 'Clothing', image: '/images/jeans.jpg' },
  { id: 18, name: 'Headphones', category: 'Electronics', image: '/images/headphones.jpg' },
  { id: 19, name: 'Scarf', category: 'Accessories', image: '/images/scarf.jpg' },
  { id: 20, name: 'Socks', category: 'Clothing', image: '/images/socks.jpg' },
  { id: 21, name: 'Backpack', category: 'Accessories', image: '/images/backpack.jpg' },
  { id: 22, name: 'Gloves', category: 'Clothing', image: '/images/gloves.jpg' },
  { id: 23, name: 'Monitor', category: 'Electronics', image: '/images/monitor.jpg' },
  { id: 24, name: 'Mouse', category: 'Electronics', image: '/images/mouse.jpg' },
  { id: 25, name: 'Keyboard', category: 'Electronics', image: '/images/keyboard.jpg' },
  { id: 26, name: 'T-shirt', category: 'Clothing', image: '/images/tshirt.jpg' },
  { id: 27, name: 'Cap', category: 'Accessories', image: '/images/cap.jpg' },
  { id: 28, name: 'Laptop Bag', category: 'Accessories', image: '/images/laptopbag.jpg' },
  { id: 29, name: 'Sneakers', category: 'Clothing', image: '/images/sneakers.jpg' },
  { id: 30, name: 'Camera', category: 'Electronics', image: '/images/camera.jpg' },
  { id: 31, name: 'Smart Watch', category: 'Electronics', image: '/images/smartwatch.jpg' },
  { id: 32, name: 'Wallet', category: 'Accessories', image: '/images/wallet.jpg' },
  { id: 33, name: 'Sunglasses', category: 'Accessories', image: '/images/sunglasses.jpg' },
  { id: 34, name: 'Boots', category: 'Clothing', image: '/images/boots.jpg' },
  { id: 35, name: 'Bracelet', category: 'Accessories', image: '/images/bracelet.jpg' },
  { id: 36, name: 'Gaming Chair', category: 'Electronics', image: '/images/gamingchair.jpg' },
  { id: 37, name: 'Laptop Bag', category: 'Accessories', image: '/images/laptopbag.jpg' },
  { id: 38, name: 'Sneakers', category: 'Clothing', image: '/images/sneakers.jpg' },
  { id: 39, name: 'Camera', category: 'Electronics', image: '/images/camera.jpg' },
  { id: 40, name: 'Smart Watch', category: 'Electronics', image: '/images/smartwatch.jpg' },
  { id: 41, name: 'Wallet', category: 'Accessories', image: '/images/wallet.jpg' },
  { id: 42, name: 'Sunglasses', category: 'Accessories', image: '/images/sunglasses.jpg' },
  { id: 43, name: 'Boots', category: 'Clothing', image: '/images/boots.jpg' },
  { id: 44, name: 'Bracelet', category: 'Accessories', image: '/images/bracelet.jpg' },
  { id: 45, name: 'Gaming Chair', category: 'Electronics', image: '/images/gamingchair.jpg' },
];

function Home({ search }) {
  const [category, setCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All Categories' || product.category === category)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="home-container">
      <div id="bannerCarousel" className="carousel slide mb-4" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    {banners.map((banner, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={banner.id}>
        <img src={banner.image} className="d-block w-100" alt={`Banner ${banner.id}`} />
      </div>
    ))}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#bannerCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#bannerCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <h1> Sản phẩm của chúng tôi </h1>
      <div className="filter">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Accessories</option>
        </select>
      </div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;