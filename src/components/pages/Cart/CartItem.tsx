import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

const CartItem = ({ product, onRemove, onUpdateQuantity } : any) => {
    return (
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
          <div className="ml-3">
            <h4 className="text-sm font-semibold text-gray-800">{product.name}</h4>
            <span className="text-sm text-gray-600">Size: {product.selectedSize}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="1"
            value={product.quantity}
            onChange={(e) => onUpdateQuantity(product.id, Number(e.target.value))}
            className="w-10 text-center text-xs border border-gray-300 rounded-md p-2"
          />
          <span className="text-sm font-bold text-gray-800">${(product.price * product.quantity)}</span>
          <Button
            variant="link"
            onClick={() => onRemove(product.id)}
            className="text-red-500"
          >
            <TrashIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  };

  export default CartItem;