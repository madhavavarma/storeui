import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EyeIcon, ShoppingCartIcon, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Product2 = (props: any) => {
  const { name, price, imageUrl } = props.product;
  const [quantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");


  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${name} to the cart.`);
  };

  return (
    <div className="max-w-xs mx-auto min-w-[180px]">
      <Card className="p-2 md:p-5 bg-white relative">
        {/* Rating Section */}
        <section className="flex flex-col justify-between">
          <div className="mt-1 flex items-center justify-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 text-yellow-400 ${
                  index < 4 ? "fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Product Image */}
        <div className="relative h-32 md:h-48 overflow-hidden rounded-lg">
          <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* Product Name */}
        <section className="relative">
          <Badge variant="default" className="flex items-center justify-center">
            {name}
          </Badge>
        </section>

        {/* Product Info */}
        <div className="mt-3">
          {/* Size Selection (Dropdown) */}
          <div className="mt-3">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <span>
                  {selectedSize} - {price}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Small">Small {price}</SelectItem>
                <SelectItem value="Medium">Medium {price}</SelectItem>
                <SelectItem value="Large">Large {price}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className="mt-3 flex items-center justify-between">
            {/* Quantity Input */}
            <div className="relative">
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue={1}
                className="w-10 text-center text-xs border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Action Buttons */}
            <section>
              <Button
                variant="default"
                size="sm"
                onClick={() => props.view(props.product)}
                className="px-3 py-1 text-xs font-medium bg-[#5DBF13]"
              >
                <EyeIcon />
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAddToCart}
                className="px-3 py-1 text-xs font-medium bg-[#5DBF13] ml-1"
              >
                <ShoppingCartIcon />
              </Button>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product2;
