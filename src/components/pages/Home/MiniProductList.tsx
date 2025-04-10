import { useState } from "react";
import Product2 from "./Product2"; // Import the Product2 component
import FloatingButtonWithTT from "../Shared/FloatingButtonsWithTT";
import { ShoppingCartIcon } from "lucide-react";
import CartDrawer from "../Cart/CartDrawer";
import Cart from "../Cart/Cart";
import { IProduct } from "@/interfaces/IProduct";

const MiniProductList = () => {
  const [products] = useState<IProduct[]>([
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 19.99,
      imageUrls:
        ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      price: 29.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      price: 39.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
    {
      id: 4,
      name: "Product 4",
      description: "Description for product 4",
      price: 49.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
    {
      id: 5,
      name: "Product 5",
      description: "Description for product 5",
      price: 59.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
    {
      id: 6,
      name: "Product 6",
      description: "Description for product 6",
      price: 69.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
    {
      id: 7,
      name: "Product 7",
      description: "Description for product 7",
      price: 69.99,
      imageUrls:
        ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description for product 8",
      price: 69.99,
      imageUrls:
      ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
  },
  ]);

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-4 text-center">
      {/* Section Title */}
      <p className="text-sm text-green-500 mb-1 pt-6">Select Vegetables</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Fresh Vegetables</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
        {products.map((product) => (
          <div key={product.id}>
            <Product2 product={product} isHideDrawer={false}/>
          </div>
        ))}
      </div>

      {/* Cart Drawer & Floating Button */}
      <div>
        <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)}>
          <Cart />
        </CartDrawer>

        {!showCart && (
          <div className="fixed bottom-20 right-2 z-50 flex flex-col space-y-2">
            <FloatingButtonWithTT
              icon={<ShoppingCartIcon />}
              onClick={() => setShowCart(!showCart)}
              tooltipContent="See your cart"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniProductList;
