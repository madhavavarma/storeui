import { useState } from 'react';
import { Button } from '../../ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import { CardContent } from '../../ui/card';
import Product2 from './Product2';
import { ArrowRight } from 'lucide-react';
import { useNavigationHelper } from '@/hooks/use-navigate-helper';

interface IProps {
  heading: string
}

const ProductCarousel = (props: IProps) => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$19.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$29.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$39.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$49.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$59.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
  ]);

  var navigationHelper = useNavigationHelper();


  // const goToNext = () => {
  //   if (currentIndex < products.length - itemsPerPage) {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // const goToPrevious = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevIndex) => prevIndex - 1);
  //   }
  // };

  return (
    <div className="py-8 px-4 bg-gray-50 relative bg-[#fff] ">
      <div className="flex justify-between items-center mt-6 mb-4 ml-4 mr-4 px-4">
        <h2 className="text-2xl font-bold">{props.heading}</h2>
       
      </div>

      <Carousel opts={{ align: "start" }} className=" w-[98%] m-auto">
        <CarouselContent>
            {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/8 md:basis-1/4 lg:basis-1/4">
                <div >
                    <CardContent className="flex  ">
                        <Product2 key={product.id} product={product}/>
                    </CardContent>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
         {/* Left Arrow */}
         <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-1">
          <CarouselPrevious className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600">
            &#9664; {/* Left Arrow */}
          </CarouselPrevious>
        </div>

        {/* Right Arrow */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-1">
          <CarouselNext className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600">
            &#9654; {/* Right Arrow */}
          </CarouselNext>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => navigationHelper.goToProducts("", props.heading)} className="bg-green-800 text-white ">
            View More <ArrowRight />
          </Button>
        </div>
    </Carousel>
    </div>
  );
};

export default ProductCarousel;
