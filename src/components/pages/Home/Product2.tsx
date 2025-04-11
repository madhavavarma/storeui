import { useState } from "react";
import { IProduct } from "@/interfaces/IProduct";
import RightDrawer from "../Shared/RightDrawer";
import ProductDetail from "../Products/ProductDetail";
import { Star } from "lucide-react";

interface ProductProps {
  product: IProduct;
  labels?: string[];
  isHideDrawer?: boolean;
}

const Product2 = ({ product, isHideDrawer }: ProductProps) => {
  const { name, price, imageUrls } = product;
  const [showProductDetail, setShowProductDetail] = useState<IProduct | null>(null);

  return (
    <>
      {/* Fixed Size Product Card */}
      <div
        className="w-full max-w-[200px] sm:max-w-[180px] md:max-w-[200px] bg-white border border-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-100 transition-all cursor-pointer"
        onClick={() => setShowProductDetail(product)}
      >
        {/* Product Image */}
        <div className="relative h-36 md:h-48 overflow-hidden rounded">
          <img
            src={imageUrls[0]}
            alt={name}
            className="object-cover w-full h-full"
          />

          {/* Labels */}
          {product.labels.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-row gap-1">
              {product.labels.map((label, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Name & Price */}
        <div className="mt-2 px-1">
          <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 h-10 leading-tight">
            {name}
          </h2>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm font-bold text-green-600">₹{price}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex px-1 mt-1 mb-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Drawer */}
      {showProductDetail && !isHideDrawer && (
        <RightDrawer
          isOpen={!!showProductDetail}
          onClose={() => setShowProductDetail(null)}
        >
          <ProductDetail product={product} />
        </RightDrawer>
      )}
    </>
  );
};

export default Product2;
