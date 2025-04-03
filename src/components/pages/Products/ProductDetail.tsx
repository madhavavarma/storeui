import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const product = {
    id: 1,
    name: "Multi Millet Cookies",
    description:
      "These high-protein multi-millet cookies are made with natural ingredients, free from preservatives, added sugars, and maida.",
    price: "₹199",
    imageUrls: [
      "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
      "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
      "https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png",
    ],
    specifications:
      "100g contains 20g protein, gluten-free, rich in fiber and essential nutrients.",
    howToUse:
      "Enjoy with milk, tea, or as a snack. Store in an airtight container.",
    ingredients: "Millets, jaggery, nuts, seeds, natural flavors.",
  };

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    description: false,
    specifications: false,
    howToUse: false,
    ingredients: false,
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState("Red");

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Fragment>
      <div className="max-w-xs mx-auto pb-10 space-y-4">
        {/* Product Image Slider */}
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {product.imageUrls.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <CardContent className="flex items-center justify-center p-2 h-[200px]">
                  <img
                    src={image}
                    className="rounded-lg w-full h-full object-cover"
                    alt={`Product Image ${index + 1}`}
                  />
                </CardContent>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        {/* Product Title & Price */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <span className="text-lg font-semibold text-primary">{product.price}</span>
        </div>

        {/* Variant Selection Card */}
        <Card className="p-4 bg-gray-200 rounded-lg shadow-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Size</h3>
              <div className="flex gap-2">
                {["Small", "Medium", "Large"].map((size) => (
                  <Button
                    key={size}
                    size="sm"
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="text-xs px-3 py-1"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Color</h3>
              <div className="flex gap-2">
                {["Red", "Blue", "Green"].map((color) => (
                  <Button
                    key={color}
                    size="sm"
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                    className="text-xs px-3 py-1"
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2 py-1"
                >
                  <CircleMinus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-semibold">{quantity}</span>
                <Button
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2 py-1"
                >
                  <CirclePlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Expandable Sections */}
        <div className="space-y-3">
          {[{ title: "Description", content: product.description },
            { title: "Specifications", content: product.specifications },
            { title: "How to Use", content: product.howToUse },
            { title: "Ingredients", content: product.ingredients }].map(({ title, content }) => (
            <div key={title} className="border-b py-2">
              <button
                className="flex justify-between w-full text-sm font-medium"
                onClick={() => toggleSection(title.toLowerCase())}
              >
                {title}
                {openSections[title.toLowerCase()] ? (
                  <CircleMinus className="h-4 w-4" />
                ) : (
                  <CirclePlus className="h-4 w-4" />
                )}
              </button>
              <AnimatePresence>
                {openSections[title.toLowerCase()] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="text-gray-600 text-xs mt-2"
                  >
                    {content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
