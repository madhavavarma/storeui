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

const Product2 = ({ product, labels = ["New"], isHideDrawer }: ProductProps) => {
  const { name, price, imageUrls } = product;
  const [showProductDetail, setShowProductDetail] = useState<IProduct | null>(null);



  return (
    <>
      {/* Full-Width Clickable Product */}
      <div 
        className="w-full cursor-pointer border border-gray-300 border-t-0 border-l-0 border-r-0 p-2 hover:bg-gray-100 transition-all bg-white shadow-md rounded-lg"
        onClick={() => setShowProductDetail(product)}
      >
        <div className="relative h-40 md:h-52 overflow-hidden">
          <img src={imageUrls[0]} alt={name} className="object-cover w-full h-full" />

          {/* Labels Positioned at the Top-Right */}
          {labels.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {labels.map((label, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Product Name & Price */}
        <div className="flex justify-between items-center px-2 mt-2">
          <h2 className="text-md font-semibold text-gray-900">{name}</h2>
          <span className="text-md font-bold text-green-600">₹{price}</span>
        </div>

        {/* Star Rating */}
        <div className="mb-2 flex justify-start px-2">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className={`w-4 h-4 ${index < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
        </div>
      </div>

      {/* Product Detail Drawer */}
      {showProductDetail && !isHideDrawer && (
        <RightDrawer isOpen={!!showProductDetail} onClose={() => setShowProductDetail(null)}>
          <ProductDetail product={product} />
        </RightDrawer>
      )}
    </>
  );
};

export default Product2;
