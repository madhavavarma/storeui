import { IProduct } from "@/interfaces/IProduct";
import { ProductActions } from "@/store/ProductSlice";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";

interface ProductProps {
  product: IProduct;
  labels?: string[];
  isHideDrawer?: boolean;
}

const Product2 = ({ product }: ProductProps) => {


  const { name, price, imageUrls } = product;
  const dispatch = useDispatch();

  const setProudctDetail = () => {
    dispatch(ProductActions.setProductDetail(product))
  }

  const rating = 5;
  const reviews = 30;

  return (
    <>
      <div
        className="w-full bg-white border border-gray-200 rounded shadow-sm hover:shadow-md cursor-pointer transition-all h-[320px] flex flex-col"
        onClick={() => setProudctDetail()}
      >
        {/* Product Image */}
        <div className="relative h-44 overflow-hidden rounded-t">
          <img
            src={imageUrls[0]}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between flex-grow px-2 py-2">
          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span className="bg-gray-100 px-1.5 py-0.5 rounded font-semibold text-sm flex items-center gap-1">
              {rating.toFixed(1)} <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>

          {/* Product Name */}
          <p className="text-sm text-gray-800 line-clamp-2 mt-1">{name}</p>

          {/* Labels */}
          {product.labels.length > 0 && (
            <div className="flex gap-1 mt-1 flex-wrap">
              {product.labels.map((label, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow"
                >
                  {label}
                </span>
              ))}
            </div>
          )}

          {/* Price Section */}
          <div className="mt-auto">
            <span className="text-base font-semibold text-green-600">₹{price}</span>
            <span className="text-sm text-gray-500 line-through ml-1">₹{price + 200}</span>
            <span className="text-sm text-orange-600 font-semibold ml-1">(10% OFF)</span>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Product2;
