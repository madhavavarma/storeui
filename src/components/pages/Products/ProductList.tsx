import { Fragment, useEffect, useRef, useState } from "react";
import Product2 from "../Home/Product2";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import { Search, ShoppingCartIcon } from "lucide-react";
import { FloatingButtonWithTT } from "../Shared/FloatingButtonsWithTT";
import { useSearchParams } from "react-router-dom";
import RightDrawer from "../Shared/RightDrawer";
import ProductDetail from "./ProductDetail";
import CartDrawer from "../Cart/CartDrawer";
import Cart from "../Cart/Cart";
import { IProduct } from "@/interfaces/IProduct";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { IState } from "@/store/interfaces/IState";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [category, setCategory] = useState(categoryParam || "0");
  const [showSearch, setShowSearch] = useState(!!searchParam || !!categoryParam);
  const [showCart, setShowCart] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState<IProduct | null>(null);

  const products = useSelector((state: IState) => state.Products.products);
  const categories = useSelector((state: IState) => state.Categories.categories);

  const filteredProducts = products.filter((product: IProduct) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = category === "0" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // 🛒 Redux cart state
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 💥 Shake animation state
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
    <Fragment>
      <Header />

      <div className="max-w-7xl mx-auto p-0">
        <p className="text-sm text-green-500 mb-1 pt-6 text-center">Select Products</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="w-full">
                <Product2 product={product} isHideDrawer={false} />
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-2 md:col-span-4">No products found</p>
          )}
        </div>
      </div>

      {/* Product Detail Drawer */}
      <RightDrawer isOpen={!!showProductDetail} onClose={() => setShowProductDetail(null)}>
        <ProductDetail product={showProductDetail || ({} as IProduct)} />
      </RightDrawer>

      {/* Cart Drawer */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)}>
        <Cart />
      </CartDrawer>

      {/* Floating Buttons */}
      {!showProductDetail && !showCart && (
        <div className="fixed bottom-20 right-2 z-[9999] flex flex-col space-y-2">
          {/* 🛒 Cart button with badge and shake */}
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

          {/* 🔍 Search button */}
          <FloatingButtonWithTT
            icon={<Search />}
            onClick={() => setShowSearch(!showSearch)}
            tooltipContent="Search for products"
          />
        </div>
      )}

      {/* Search + Category Bar */}
      {showSearch && (
        <div className="fixed top-0 left-0 right-0 bg-green-900 p-4 z-50 shadow-md">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white p-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-36 bg-gray-100 text-black rounded-md">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem key={"0"} value={"0"}>
                  {"All"}
                </SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat.id} value={cat.id.toString()}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full p-2 outline-none bg-white"
            />
          </div>
        </div>
      )}

      <Footer />
    </Fragment>
  );
};

export default ProductList;
