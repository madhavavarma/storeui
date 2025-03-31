import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../ui/carousel';
import { Card, CardContent } from '../../ui/card';
import Category from './Category';

const CategoryCarousel = () => {
  const [categories] = useState([
    { id: 1, name: 'Category 1', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 2, name: 'Category 2', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 3, name: 'Category 3', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 4, name: 'Category 4', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 5, name: 'Category 5', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    { id: 6, name: 'Category 6', image: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
  ]);

  return (
    <div className="bg-[#fff] text-center w-full">
      {/* "Choose Categories" Text in Green */}
      <p className="text-sm text-green-500 mb-1  pt-6">Choose Categories</p>

      {/* "Explore Categories" Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Categories</h2>

      <Carousel className="w-full h-[200px] w-[80%] m-auto">
      <CarouselContent className="-ml-1">
        {categories.map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <Category category={_} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious className=""/>
      <CarouselNext className=""/>
    </Carousel>
    </div>
  );
};

export default CategoryCarousel;
