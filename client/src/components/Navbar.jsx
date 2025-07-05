import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Store className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">Store</h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Products
            </button>

            <button
              onClick={() => navigate('/cart')}
              className="relative flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
