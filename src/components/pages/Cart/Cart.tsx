import { Card } from "@/components/ui/card";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CartItem from "./CartItem";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";

// Cart Page component
const Cart = () => {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "Product 1",
        price: 29.99,
        imageUrl: "/path/to/image.jpg", // Replace with actual image path
        selectedSize: "Medium",
        quantity: 1
      },
      {
        id: 2,
        name: "Product 2",
        price: 19.99,
        imageUrl: "/path/to/image2.jpg", // Replace with actual image path
        selectedSize: "Large",
        quantity: 2
      }
    ]);
  
    const navigate = useNavigate();
  
    // Handle removing a product from the cart
    const handleRemoveFromCart = (id: number) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    };
  
    // Handle updating quantity
    const handleUpdateQuantity = (id: number, quantity: number) => {
      setCartItems(cartItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      ));
    };
  
    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
    return (
      <Fragment>
        <Header />
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    
            <div className="space-y-4">
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                <Card key={item.id} className="p-4 bg-white shadow-md rounded-md">
                    <CartItem
                    product={item}
                    onRemove={handleRemoveFromCart}
                    onUpdateQuantity={handleUpdateQuantity}
                />
                </Card>
                ))
            )}
            </div>
    
            {/* Cart Summary */}
            <div className="flex justify-between mt-6">
            <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <Button
                variant="default"
                size="lg"
                onClick={() => navigate("/checkout")}
                className="px-4 py-2 bg-[#5DBF13] text-white"
            >
                Proceed to Checkout
            </Button>
            </div>
        </div>
        <Footer />
      </Fragment>
    );
  };
  
  export default Cart;