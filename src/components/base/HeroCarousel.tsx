import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';

export default function MainCarousel() {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const autoSlide = () => {
      if (api) {
        const nextIndex = (api.selectedScrollSnap() + 1) % count;
        api.scrollTo(nextIndex);
      }
    };

    const interval = setInterval(autoSlide, 50000);

    return () => clearInterval(interval);
  }, [api, count]);

  const slides = [
    {
      image: 'https://themezhub.net/odex-live/odex/assets/img/banner-14.jpg',
      headerText: 'Decorate Your Home with Plants',
      contentText: 'Nemo enim ipsam voluptatem quia.'
    },
    {
      image: 'https://themezhub.net/odex-live/odex/assets/img/banner-15.jpg',
      headerText: 'Fresh Greenery to Brighten Your Space',
      contentText: 'Duis aute irure dolor in reprehenderit.'
    },
  ];

  return (
    <section className="w-full  relative mt-[60px]">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="">
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-none h-full relative">
                <CardContent className="flex h-full items-center p-0">
                  <img 
                    src={slide.image} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute text-left w-1/2 pl-4 pr-4">
                    <h2 className="text-sm sm:text-xs md:text-xl lg:text-2xl font-bold mb-2 text-gray">
                      {slide.headerText}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-gray">
                      {slide.contentText}
                    </p>
                    <button className="bg-green-800 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-lg hover:bg-green-700 transition-all"> 
                        Shop
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array(count).fill(null).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${current - 1 === index ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
