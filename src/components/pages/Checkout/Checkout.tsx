import { useSelector, useDispatch } from "react-redux";
import { IState } from "@/store/interfaces/IState";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Wallet,
  ArrowLeft,
  Trash2,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CartActions } from "@/store/CartSlice";
import { useNavigationHelper } from "@/hooks/use-navigate-helper";
import { IOption } from "@/interfaces/IProduct";

export default function CheckoutPage() {
  const cartItems = useSelector((state: IState) => state.Cart.cartItems);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const navigationHelper = useNavigationHelper();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
    deliveryDate: "",
    paymentMethod: "cod",
  });

  const [sameAsPhone, setSameAsPhone] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSameAsPhoneToggle = () => {
    const newValue = !sameAsPhone;
    setSameAsPhone(newValue);
    setFormData((prev) => ({
      ...prev,
      whatsapp: newValue ? prev.phone : "",
    }));
  };

  const handlePlaceOrder = () => {
    navigationHelper.goToThankYou();
    
    const { phone, email, address, city, pincode, deliveryDate } = formData;
    if (!phone || !email || !address || !city || !pincode || !deliveryDate) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Order placed successfully!");
    console.log("Order Data:", { ...formData, cartItems });

   
  };

  const handleRemoveItem = (item: any) => {
    dispatch(
      CartActions.removeItem({
        productId: item.product.id,
        selectedOptions: item.selectedOptions,
      })
    );
  };

  const handleUpdateQuantity = (
    productId: number,
    selectedOptions: { [variantName: string]: IOption },
    isIncrease: boolean
  ) => {
    const item = cartItems.find(
      (item) =>
        item.product.id === productId &&
        JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
    );
    if (!item) return;

    if (!isIncrease && item.quantity <= 1) return;

    dispatch(
      isIncrease
        ? CartActions.increaseQuantity({ productId, selectedOptions })
        : CartActions.decreaseQuantity({ productId, selectedOptions })
    );
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          className="flex items-center text-sm text-gray-600 hover:text-green-700"
          onClick={() => navigationHelper.goToProducts()}
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Continue Shopping
        </Button>

        {/* Checkout Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-lime-500 text-transparent bg-clip-text flex justify-center items-center gap-2">
            <Wallet className="w-8 h-8" />
            Checkout
          </h1>
          <div className="mt-2 h-1 w-24 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        <div className="w-32" /> {/* Placeholder for alignment */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 space-y-4">
                <h2 className="text-lg font-semibold text-green-800">🛒 Order Items</h2>
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 border-b py-3 text-sm"
                  >
                    <img
                      src={item.product.imageUrls?.[0]}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 truncate">
                        {item.product.name}
                      </p>
                      {item.selectedOptions &&
                        Object.entries(item.selectedOptions).map(([variantId, option]: any) => (
                          <div key={variantId} className="text-gray-500 text-xs">
                            {option?.variantName}:{" "}
                            <span className="font-medium">{option?.name}</span>
                          </div>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="w-6 h-6 text-green-700 border-green-400"
                        onClick={() =>
                          handleUpdateQuantity(item.product.id || 0, item.selectedOptions, false)
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-semibold w-5 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="w-6 h-6 text-green-700 border-green-400"
                        onClick={() =>
                          handleUpdateQuantity(item.product.id || 0, item.selectedOptions, true)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-right w-20 font-semibold">
                      ₹{item.totalPrice.toFixed(2)}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <div className="border-t pt-2 flex justify-between font-bold text-green-800">
                  <span>Total</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* User Info */}
        <div className="space-y-6">
          {/* Contact Info */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact
              </h2>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <Input
                type="text"
                placeholder="WhatsApp (Optional)"
                value={formData.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.value)}
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={sameAsPhone}
                  onChange={handleSameAsPhoneToggle}
                />
                Same as phone number
              </label>
            </CardContent>
          </Card>

          {/* Address */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Shipping Address
              </h2>
              <Input
                placeholder="Full Address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
              <Input
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <Input
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
              <Input
                type="date"
                value={formData.deliveryDate}
                onChange={(e) => handleChange("deliveryDate", e.target.value)}
              />
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Payment Method
              </h2>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(val) => handleChange("paymentMethod", val)}
                className="space-y-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <label htmlFor="cod" className="text-sm">
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex items-center gap-2 opacity-50 cursor-not-allowed">
                  <RadioGroupItem value="upi" id="upi" disabled />
                  <label htmlFor="upi" className="text-sm">
                    UPI (Coming Soon)
                  </label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Place Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Button
              onClick={handlePlaceOrder}
              className="w-full bg-[#5DBF13] hover:bg-green-700 text-white rounded-xl"
              disabled={cartItems.length === 0}
            >
              Place Order
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
