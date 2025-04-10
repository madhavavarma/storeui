import { Fragment, useState } from "react";
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

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get("search");
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [category, setCategory] = useState(categoryParam || "0"); // Default to "All"
  const [showSearch, setShowSearch] = useState(!!searchParam || !!categoryParam);
  const [showCart, setShowCart] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState<IProduct | null>(null);

  const [products] = useState<IProduct[]>([
    {
      id: 1,
      name: "Tomato",
      description: "Fresh red tomatoes",
      price: 19.99,
      imageUrls: ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
      category: "1", // Veggies
      productVariants: [],
    },
    {
      id: 2,
      name: "Carrot",
      description: "Organic carrots",
      price: 29.99,
      imageUrls: ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
      category: "1",
      productVariants: [],
    },
    {
      id: 3,
      name: "Broccoli",
      description: "Green Broccoli",
      price: 39.99,
      imageUrls: ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
      category: "2", // Leafy
      productVariants: [],
    },
    {
      id: 4,
      name: "Onion",
      description: "Spicy onions",
      price: 25.5,
      imageUrls: ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
      category: "1",
      productVariants: [],
    },
    {
      id: 5,
      name: "Spinach",
      description: "Leafy spinach",
      price: 15.0,
      imageUrls: ["https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png"],
      category: "2",
      productVariants: [],
    },
  ]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = category === "0" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <Fragment>
      <Header />

      <div className="max-w-7xl mx-auto p-4 text-center">
        <p className="text-sm text-green-500 mb-1 pt-6">Select Vegetables</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Fresh Vegetables</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="w-full">
                <Product2 product={product} isHideDrawer={false}/>
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
        <div className="fixed bottom-20 right-2 z-50 flex flex-col space-y-2">
          <FloatingButtonWithTT
            icon={<ShoppingCartIcon />}
            onClick={() => setShowCart(!showCart)}
            tooltipContent="See your cart"
          />
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
                <SelectItem value="0">All</SelectItem>
                <SelectItem value="1">Vegetables</SelectItem>
                <SelectItem value="2">Leafy Greens</SelectItem>
                <SelectItem value="3">Fruits</SelectItem>
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
