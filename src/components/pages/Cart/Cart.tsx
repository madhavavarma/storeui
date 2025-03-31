import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/store/interfaces/ICart";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store/interfaces/IState";
import { CartActions } from "@/store/CartSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const dispatch = useDispatch();

  const updateQuantity = (id: number, isIncrease = true) => {
    isIncrease
      ? dispatch(CartActions.increaseQuantity(id))
      : dispatch(CartActions.decreaseQuantity(id));
  };

  const removeItem = (id: number) => {
    dispatch(CartActions.removeItem(id));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-md p-4">
      {cartItems.map((item: ICartItem) => (
        <div
          key={item.product.id}
          className="flex items-center justify-between py-3 border-b border-gray-200"
        >
          {/* Product Image & Name */}
          <div className="flex items-center w-28">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-12 h-12 rounded object-cover"
            />
            <p className="ml-3 font-medium text-sm">{item.product.name}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
            <Button
              size="icon"
              className="w-7 h-7 bg-[#5DBF13] text-white rounded-full hover:bg-green-700"
              onClick={() => updateQuantity(item.product.id || 0, false)}
            >
              <Minus size={14} />
            </Button>

            <span className="text-sm font-semibold w-6 text-center">
              {item.quantity}
            </span>

            <Button
              size="icon"
              className="w-7 h-7 bg-[#5DBF13] text-white rounded-full hover:bg-green-700"
              onClick={() => updateQuantity(item.product.id || 0)}
            >
              <Plus size={14} />
            </Button>
          </div>

          {/* Price & Remove */}
          <div className="flex items-center space-x-4">
            <p className="text-[#5DBF13] font-semibold text-sm">
              ₹{item.totalPrice.toFixed(2)}
            </p>
            <Button
              size="icon"
              className="w-7 h-7 text-gray-500 hover:text-red-500"
              onClick={() => removeItem(item.product.id || 0)}
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
