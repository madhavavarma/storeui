import { useState } from 'react';
import Product2 from './Product2'; // Import the Product2 component

const MiniProductList = () => {

     const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$19.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$29.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$39.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$49.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$59.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 7, name: 'Product 7', description: 'Description for product 6', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 8, name: 'Product 8', description: 'Description for product 6', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
      ]);
      
  return (
    <div className="max-w-7xl mx-auto p-4  text-center">
      {/* "Choose Categories" Text in Green */}
      <p className="text-sm text-green-500 mb-1  pt-6">Select Vegetables</p>

      {/* "Explore Categories" Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Fresh Vegetables</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <Product2 product={product} />
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default MiniProductList;
