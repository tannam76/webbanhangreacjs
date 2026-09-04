import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../assets/style/cart.css';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleApplyDiscount = () => {
    // Ví dụ mã giảm giá: "SAVE10" sẽ giảm 10%
    if (discountCode === 'SAVE10') {
      setDiscountAmount(totalPrice * 0.1); // Giảm 10%
    } else {
      alert('Mã giảm giá không hợp lệ');
    }
  };

  const discountedTotal = totalPrice - discountAmount;

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Giỏ hàng của bạn trống</h2>;
  }

  return (
    <div className="cart">
      <h1>Giỏ hàng của bạn</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <div className="details">
                <p className="price">Giá: ${item.price}</p>
                <div className="quantity">
                  <button onClick={() => handleDecrease(item)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                <FontAwesomeIcon icon={faTrash} /> Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Tổng tiền: ${totalPrice}</h2>
      <h3>Tổng tiền phải thanh toán: ${discountedTotal}</h3>
      <div className="discount">
        <input
          type="text"
          placeholder="Nhập mã giảm giá"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={handleApplyDiscount}>Áp dụng</button>
      </div>
      <button className="clear-btn" onClick={clearCart}>
        <FontAwesomeIcon icon={faTrash} /> Xóa tất cả
      </button>
    </div>
  );
}

export default Cart;