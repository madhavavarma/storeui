import { Fragment } from "react";
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import Product3 from "./Product3";
import ProductCarousel from "../Home/ProductCarousel";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

// Custom Carousel component using ShadCN's state management and styling
// const Carousel = ({ images }: { images: string[] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="overflow-hidden rounded-lg h-96">
//         <img
//           src={images[currentIndex]}
//           alt={`Product image ${currentIndex + 1}`}
//           className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
//         />
//       </div>

//       {/* Navigation buttons */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 p-2 rounded-full"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-500 p-2 rounded-full"
//       >
//         &gt;
//       </button>

//       {/* Dots for navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const ProductDetail = () => {
  const product = { 
    id: 1, 
    name: 'Product 1', 
    description: 'Description for product 1', 
    price: '$19.99', 
    imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png',
    imageUrls: [
      'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png',
      'https://cdn.pixabay.com/photo/2023/11/29/03/48/e-commerce-8418611_1280.png',
      'https://cdn.pixabay.com/photo/2023/11/29/03/50/e-commerce-8418612_1280.png',
    ]
  };
  
  // const { name, price, imageUrls, description } = product;
  // const [quantity, setQuantity] = useState(1);
  // const [selectedSize, setSelectedSize] = useState("Medium");

  // const handleAddToCart = () => {
  //   console.log(`Added ${quantity} of ${name} to the cart.`);
  // };

  return (
    <Fragment>
        <Header />

        <section className="max-w-6xl mx-auto p-10">
        
            {/* Image Card with Product Info */}
            <Card className="p-5 bg-white shadow-md rounded-lg mb-8 flex flex-col sm:flex-row sm:flex-wrap">
                <div className="w-full sm:w-1/2">
                    <Product3 product={product} className="" />
                </div>
                

                <Tabs defaultValue="details" className="w-full sm:w-1/2">
            <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
    <TabsTrigger value="images">Images</TabsTrigger>
  </TabsList>
  <TabsContent value="details">
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        {/* {product.description} */}
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="ingredients">
    <Card>
      <CardHeader>
        <CardTitle>Ingredients</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <ul className="list-disc pl-5">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="reviews">
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <p>No reviews yet. Be the first to review this product!</p>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="images">
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-700 mt-2">
        <p>No reviews yet. Be the first to review this product!</p>
      </CardContent>
    </Card>
  </TabsContent>

  
</Tabs>
            </Card>

            

              
           
        
        </section>

        <section className="">
        <ProductCarousel heading="Related Products" />
      </section>

        <Footer />
    </Fragment>
  );
};

export default ProductDetail;
