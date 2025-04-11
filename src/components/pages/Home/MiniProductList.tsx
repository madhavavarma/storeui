import { useEffect, useRef, useState } from "react";
import Product2 from "./Product2";
import FloatingButtonWithTT from "../Shared/FloatingButtonsWithTT";
import { ShoppingCartIcon } from "lucide-react";
import CartDrawer from "../Cart/CartDrawer";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { IState } from "@/store/interfaces/IState";

const MiniProductList = () => {
  const products = useSelector((state: IState) => state.Products.products);

  const [showCart, setShowCart] = useState(false);

  // Redux cart state
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Shake animation state
  const [shake, setShake] = useState(false);
  const prevCartRef = useRef<number>(cartItemCount);

  useEffect(() => {
    if (prevCartRef.current !== cartItemCount) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      prevCartRef.current = cartItemCount;
      return () => clearTimeout(timer);
    }
  }, [cartItemCount]);

  return (
    <div className="max-w-7xl mx-auto p-4 text-center">
      {/* Section Title */}
      <p className="text-sm text-green-500 mb-1 pt-6">Select Products</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>

      {/* Product Grid */}
      <div className="flex flex-wrap  justify-center">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="w-1/2 sm:w-[180px] md:w-[200px] lg:w-[220px] px-1"
          >
            <Product2 product={product} isHideDrawer={false} />
          </div>
        ))}
      </div>

      {/* Cart Drawer & Floating Button */}
      <div>
        <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)}>
          <Cart />
        </CartDrawer>

        {!showCart && (
          <div className="fixed bottom-20 right-2 z-[9999] flex flex-col space-y-2">
            <div className={`relative ${shake ? "animate-shake" : ""}`}>
              <FloatingButtonWithTT
                icon={<ShoppingCartIcon />}
                onClick={() => setShowCart(!showCart)}
                tooltipContent="See your cart"
              />
              {cartItemCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniProductList;
