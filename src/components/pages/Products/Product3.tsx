import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"; // Importing SelectContent and SelectTrigger
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Product3 = (props: any) => {
  const { name, price, imageUrl } = props.product;
  const [quantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${name} to the cart.`);
  };

  return (
    <div className="max-w-xs mx-auto min-w-[180px] flex-col">

        <section className="flex justify-between flex-col mb-4">
         

          
          {/* Rating */}
          <div className="mt-1 flex items-center justify-center">
            {/* 5 Stars */}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 text-yellow-400 ${index < 4 ? "fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
        </section>

        
        
        
        {/* Product Image */}
        <div className="relative h-48 md:h-48  overflow-hidden rounded-lg  mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />

         
        </div>

        <section className="relative ">
          {/* <ArrowRightCircle className="w-4 h-4 m-1 absolute right-[-15px] top-[3px] "/> */}

         
             {/* Product Name */}
          <Badge variant="default" className="flex items-center justify-center">
            {name}
          </Badge>
        </section>

       

        {/* Product Info */}
        <div className="mt-3">
          {/* Product Title and Price with View Icon */}
          {/* <div className="flex justify-between items-center">
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
          </div> */}

          

          {/* Size Selection (Dropdown) */}
          <div className="mt-3">
            {/* <h5 className="text-xs font-medium text-gray-600">Size:</h5> */}
            <Select
              value={selectedSize}
              onValueChange={setSelectedSize}
            //   className="text-xs w-full px-3 py-1 border rounded-md"
            >
              <SelectTrigger>
                <span>{selectedSize} - {price}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Small">Small {price}</SelectItem>
                <SelectItem value="Medium">Medium {price}</SelectItem>
                <SelectItem value="Large">Large {price}</SelectItem>
              </SelectContent>
            </Select>
          </div>


          

          {/* Quantity Selector and Add to Cart Button */}
          <div className="mt-3 flex items-center justify-between ">
            {/* Quantity Selector */}
            <div className="relative">
      {/* Plus icon inside the input as prefix */}
      {/* <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600">
        <Layers3Icon className="text-xs" />
      </div> */}

      {/* Quantity input field */}
      <input
        id="quantity"
        type="number"
        min="1"
        defaultValue={1}
        // onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-10 text-center text-xs border border-gray-300 rounded-md p-2"
      />
    </div>
            

            <section>
              {/* Add to Cart Button */}
              <Button
                variant="default"
                size="sm"
                onClick={handleAddToCart}
                className="px-3 py-1 text-xs font-medium bg-[#5DBF13]"
              >
                <ShoppingCartIcon /> Add to Cart
              </Button>

             
            </section>
          </div>
        </div>
    </div>
  );
};

export default Product3;
