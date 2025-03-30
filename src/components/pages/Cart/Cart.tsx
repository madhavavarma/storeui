import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialCart = [
  {
    id: 1,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
  {
    id: 2,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
  {
    id: 3,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
  {
    id: 1,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
  {
    id: 2,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
  {
    id: 3,
    name: "Cotton T-shirt",
    type: "Shirt",
    price: 44.0,
    quantity: 1,
    image: "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-none">
     

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4 px-4"
        >
          {/* Image and Details - Column Layout */}
          <div className="flex flex-col items-center w-24">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded object-cover"
            />
            <p className="font-semibold text-sm text-center mt-2">{item.name}</p>
          </div>

          {/* Quantity Selector - Row Layout */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 flex items-center justify-center"
              onClick={() => updateQuantity(item.id, -1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-semibold">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6 flex items-center justify-center"
              onClick={() => updateQuantity(item.id, 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Price & Remove Button - Row Layout */}
          <div className="flex items-center space-x-4">
            <p className="font-semibold text-sm">€ {item.price.toFixed(2)}</p>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 flex items-center justify-center"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-4 w-4 text-gray-500 hover:text-red-500" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
