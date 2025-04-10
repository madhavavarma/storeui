import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/store/interfaces/ICart";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store/interfaces/IState";
import { CartActions } from "@/store/CartSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const dispatch = useDispatch();

  const updateQuantity = (item: ICartItem, isIncrease = true) => {
    const payload = {
      productId: item.product.id || 0,
      selectedOptions: item.selectedOptions as { [variantName: string]: any }, // Cast to string-keyed object
    };

    dispatch(
      isIncrease
        ? CartActions.increaseQuantity(payload)
        : CartActions.decreaseQuantity(payload)
    );
  };

  const removeItem = (item: ICartItem) => {
    const payload = {
      productId: item.product.id || 0,
      selectedOptions: item.selectedOptions as { [variantName: string]: any },
    };
    dispatch(CartActions.removeItem(payload));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-md p-4">
      {cartItems.map((item: ICartItem, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 border-b border-gray-200"
        >
          {/* Product Image & Info */}
          <div className="flex items-start w-40">
            <img
              src={item.product.imageUrls[0]}
              alt={item.product.name}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="ml-3 text-sm">
              <p className="font-medium">{item.product.name}</p>
              {/* Selected Options */}
              {item.selectedOptions &&
                Object.entries(item.selectedOptions).map(
                  ([variantName, option]) => (
                    <p key={variantName} className="text-gray-500 text-xs">
                      {variantName}:{" "}
                      <span className="font-medium">{option?.name}</span>
                    </p>
                  )
                )}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
            <Button
              size="icon"
              className="w-7 h-7 bg-[#5DBF13] text-white rounded-full hover:bg-green-700"
              onClick={() => updateQuantity(item, false)}
            >
              <Minus size={14} />
            </Button>

            <span className="text-sm font-semibold w-6 text-center">
              {item.quantity}
            </span>

            <Button
              size="icon"
              className="w-7 h-7 bg-[#5DBF13] text-white rounded-full hover:bg-green-700"
              onClick={() => updateQuantity(item)}
            >
              <Plus size={14} />
            </Button>
          </div>

          {/* Price & Remove Button */}
          <div className="flex items-center space-x-4">
            <p className="text-[#5DBF13] font-semibold text-sm">
              ₹{item.totalPrice.toFixed(2)}
            </p>
            <Button
              size="icon"
              className="w-7 h-7 text-gray-500 hover:text-red-500"
              onClick={() => removeItem(item)}
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
