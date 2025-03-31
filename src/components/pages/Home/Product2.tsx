import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "@/store/CartSlice";
import { IState } from "@/store/interfaces/IState";
import { ICartItem } from "@/store/interfaces/ICart";
import { IProduct } from "@/interfaces/IProduct";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RightDrawer from "../Shared/RightDrawer";
import ProductDetail from "../Products/ProductDetail";

import { 
  CheckCircle, 
  EyeIcon, 
  MinusIcon, 
  PlusIcon, 
  ShoppingCartIcon, 
  Star 
} from "lucide-react";

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger 
} from "@/components/ui/select";

const Product2 = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const { id, name, price, image } = product;
  
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const cartItem = cartItems.find((item: ICartItem) => item.product.id === id);

  const [selectedSize, setSelectedSize] = useState("Medium");
  const [showProductDetail, setShowProductDetail] = useState<IProduct | null>(null);

  const handleAddToCart = () => dispatch(CartActions.addItem(product));

  const handleIncrease = () => {
    cartItem ? dispatch(CartActions.increaseQuantity(id || 0)) : dispatch(CartActions.addItem(product));
  };

  const handleDecrease = () => {
    if (cartItem && cartItem?.quantity > 1) {
      dispatch(CartActions.decreaseQuantity(id || 0));
    } else {
      dispatch(CartActions.removeItem(id || 0));
    }
  };

  return (
    <div className="max-w-xs mx-auto min-w-[180px]">
      <Card className="p-2 md:p-5 bg-white relative">
        
        {/* Rating Section */}
        <div className="mt-1 flex items-center justify-center">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className={`w-4 h-4 ${index < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
        </div>

        {/* Product Image */}
        <div className="relative h-32 md:h-48 overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Product Name */}
        <Badge variant="default" className="flex items-center justify-center mt-2">
          {name}
        </Badge>

        {/* Size Selector */}
        <div className="mt-3">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <span>{selectedSize} - {price}</span>
            </SelectTrigger>
            <SelectContent>
              {["Small", "Medium", "Large"].map((size) => (
                <SelectItem key={size} value={size}>
                  {size} {price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity Selector & Buttons */}
        <div className="mt-3 flex items-center justify-between">
          
          {/* Quantity Control */}
          <div className={`flex items-center gap-0 bg-gray-100 px-2 py-0.5 rounded-full ${cartItem ? "" : "invisible"}`}>
            <button
              onClick={handleDecrease}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-[#5DBF13] text-white hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!cartItem}
            >
              <MinusIcon size={14} />
            </button>

            <span className="text-xs font-semibold w-5 text-center">{cartItem ? cartItem.quantity : 0}</span>

            <button
              onClick={handleIncrease}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-[#5DBF13] text-white hover:bg-green-700"
            >
              <PlusIcon size={14} />
            </button>
          </div>


          {/* Action Buttons */}
          <div className="flex gap-1">
            {/* View Product Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowProductDetail(product)}
              className="px-3 py-1 text-xs font-medium bg-[#5DBF13]"
            >
              <EyeIcon />
            </Button>

            {/* Add to Cart / Added Indicator */}
            {cartItem ? (
              <Button
                variant="default"
                size="sm"
                className="px-3 py-1 text-xs font-medium bg-gray-500 text-white hover:bg-gray-600"
              >
                <CheckCircle />
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={handleAddToCart}
                className="px-3 py-1 text-xs font-medium bg-[#5DBF13] text-white hover:bg-green-700"
              >
                <ShoppingCartIcon />
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Product Detail Drawer */}
      {showProductDetail && (
        <RightDrawer isOpen={!!showProductDetail} onClose={() => setShowProductDetail(null)}>
          <ProductDetail />
        </RightDrawer>
      )}
    </div>
  );
};

export default Product2;
