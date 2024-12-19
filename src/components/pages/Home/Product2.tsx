import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye, Tag, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"; // Importing SelectContent and SelectTrigger
import { useState } from "react";

const Product2 = (props: any) => {
  const { name, price, imageUrl, id } = props.product;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${name} to the cart.`);
  };

  return (
    <div className="max-w-xs mx-auto">
      <Card className="p-4 bg-white  relative">
        {/* Product Tag */}
        <Tag color="red" className="absolute top-2 left-2">
          Hot
        </Tag>

        {/* Product Image */}
        <div className="relative h-48 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="mt-3">
          {/* Product Title and Price with View Icon */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-semibold text-gray-800 truncate">{name}</h4>
              <Button
                variant="link"
                onClick={() => alert(`Viewing product ${id}`)}
                className="p-2 hover:text-gray-600"
              >
                <Eye className="w-5 h-5 text-gray-500 hover:text-gray-600" />
              </Button>
            </div>
            <span className="text-lg font-bold text-gray-800">{price}</span>
          </div>

          {/* Rating */}
          <div className="mt-1 flex items-center">
            {/* 5 Stars */}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 text-yellow-400 ${index < 4 ? "fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>

          {/* Size Selection (Dropdown) */}
          <div className="mt-3">
            <h5 className="text-xs font-medium text-gray-600">Size:</h5>
            <Select
              value={selectedSize}
              onValueChange={setSelectedSize}
            //   className="text-xs w-full px-3 py-1 border rounded-md"
            >
              <SelectTrigger>
                <span>{selectedSize}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="mt-3 flex items-center justify-between space-x-2">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-1">
              <label htmlFor="quantity" className="text-xs font-medium text-gray-600">Qty:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-12 text-center text-xs border border-gray-300 rounded-md"
              />
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="default"
              size="sm"
              onClick={handleAddToCart}
              className="px-3 py-1 text-xs font-medium bg-[#5DBF13]"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product2;
