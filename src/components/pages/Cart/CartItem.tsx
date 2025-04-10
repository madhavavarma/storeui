import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

const CartItem = ({ product, onRemove, onUpdateQuantity }: any) => {
  const { name, imageUrls, price } = product.product;
  const { quantity, selectedOptions } = product;

  console.log(selectedOptions);

  return (
    <div className="flex justify-between items-center py-2 border-b pb-3">
      <div className="flex items-center">
        <img
          src={imageUrls?.[0]}
          alt={name}
          className="w-12 h-12 object-cover rounded-md"
        />
        <div className="ml-3 text-sm">
          <h4 className="font-semibold text-gray-800">{name}</h4>

          {/* Selected Options */}
          {selectedOptions && Object.entries(selectedOptions).map(([variantId, option]: any) => (
            <div key={variantId} className="text-gray-600 text-xs">
              {option?.variantName}: <span className="font-medium">{option?.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onUpdateQuantity(product.product.id, Number(e.target.value))}
          className="w-10 text-center text-xs border border-gray-300 rounded-md p-2"
        />
        <span className="text-sm font-bold text-gray-800">₹{(price * quantity).toFixed(2)}</span>
        <Button
          variant="link"
          onClick={() => onRemove(product.product.id)}
          className="text-red-500"
        >
          <TrashIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
