import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react'; // npm install lucide-react

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cart/get')
        setCartItems(response.data || []) // Properly accessing response data
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    getData()
  }, [])

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Navigate or trigger API
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cart/delete/${id}`);
      setCartItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to remove item');
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Cart Items</h1>

        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg mb-4 shadow-sm hover:bg-gray-50 relative"
          >
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.product.title}</h2>
              <p className="text-sm text-gray-500">{item.product.description}</p>
              <div className="mt-2 flex justify-between text-sm">
                <span>Price: ₹{item.product.price.toLocaleString()}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            </div>
            <div className="font-bold text-green-600 text-right">
              ₹{(item.product.price * item.quantity).toLocaleString()}
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 transition"
              title="Remove from cart"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        <div className="border-t pt-4 mt-6 text-right">
          <p className="text-xl font-semibold">Total: ₹{totalPrice.toLocaleString()}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
