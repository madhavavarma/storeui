import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

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

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {
      description: false,
      specifications: false,
      howToUse: false,
      ingredients: false,
    }
  );

  const [quantity, setQuantity] = useState(1);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const [selectedSize, setSelectedSize] = useState("Medium");

  return (
    <Fragment>
      <div className="max-w-md mx-auto p-4 pb-20">
        {/* Product Image Slider */}
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent className="-ml-1">
            {product.imageUrls.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <CardContent className="flex items-center justify-center p-2 h-[300px]">
                    <img
                      src={image}
                      className="rounded-lg w-full h-full object-cover"
                      alt={`Product Image ${index + 1}`}
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        {/* Product Title */}
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>

        <div>
          
        
          {/* Quantity Selector */}
          <div className="flex items-center space-x-2 mb-4  mt-2">

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <span>{selectedSize} - {product.price}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Small">Small {product.price}</SelectItem>
              <SelectItem value="Medium">Medium {product.price}</SelectItem>
              <SelectItem value="Large">Large {product.price}</SelectItem>
            </SelectContent>
          </Select>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
        </div>

        {/* Expandable Sections */}
        {[
          { title: "Description", content: product.description },
          { title: "Specifications", content: product.specifications },
          { title: "How to Use", content: product.howToUse },
          { title: "Ingredients", content: product.ingredients },
        ].map(({ title, content }) => (
          <div key={title} className="border-b py-2">
            <button
              className="flex justify-between w-full text-lg font-medium"
              onClick={() => toggleSection(title.toLowerCase())}
            >
              {title}
              <ChevronDown
                className={`transition-transform ${
                  openSections[title.toLowerCase()] ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openSections[title.toLowerCase()] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-gray-600 text-sm mt-2"
                >
                  {content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

       


       </div>

     
    </Fragment>
  );
};

export default ProductDetail;
