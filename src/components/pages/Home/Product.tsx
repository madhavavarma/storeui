// ClassicPeaceLilyCard.tsx

import { Button } from "@/components/ui/button";

const Product = () => {
  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-8 transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <div className="flex flex-col md:flex-row"> {/* Use flex-col on small screens and flex-row on medium screens and up */}
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-6">
          <img
            src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
            alt="Classic Peace Lily"
            width={240}
            height={240}
            className="object-cover rounded-lg mx-auto md:mx-0"
          />
        </div>

        {/* Product Description */}
        <div className="w-full md:w-1/2 p-6 border-t-2 md:border-l-2 md:border-gray-200">
          <h2 className="text-xl text-gray-800 font-semibold uppercase">Classic Peace Lily</h2>
          <h4 className="text-sm text-gray-500 uppercase mt-1">Popular House Plant</h4>
          <h1 className="text-3xl font-light text-gray-700 mt-4">$18</h1>
          <p className="text-sm text-gray-600 mt-3 mb-6 leading-relaxed">
            Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.
          </p>

          {/* Green Buttons */}
          <div className="flex space-x-4">
            <Button className="py-2 px-4 bg-green-500 text-white hover:bg-green-600 border border-transparent rounded-lg">
              Add to Cart
            </Button>
            <Button className="py-2 px-4 bg-green-500 text-white hover:bg-green-600 border border-transparent rounded-lg">
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
