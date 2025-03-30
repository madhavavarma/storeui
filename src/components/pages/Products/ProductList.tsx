import { Fragment, useState } from 'react';
import Product2 from '../Home/Product2';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import { Search, ShoppingCartIcon,  } from 'lucide-react';
import { FloatingButtonWithTT } from '../Shared/FloatingButtonsWithTT';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSearchParams } from "react-router-dom";
import RightDrawer from '../Shared/RightDrawer';
import ProductDetail from './ProductDetail';
import CartDrawer from '../Cart/CartDrawer';
import Cart from '../Cart/Cart';

const ProductList = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$19.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$29.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$39.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$49.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$59.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 7, name: 'Product 7', description: 'Description for product 7', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
        { id: 8, name: 'Product 8', description: 'Description for product 8', price: '$69.99', imageUrl: 'https://cdn.pixabay.com/photo/2023/11/29/03/44/e-commerce-8418610_1280.png' },
    ]);

    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");

    const [searchQuery, setSearchQuery] = useState(searchParam || "");
    const [showSearch, setShowSearch] = useState(categoryParam || searchParam ? true : false); 
    const [showCategories] = useState(false); 
    const [showProductDetail, setShowProductDetail] = useState(null); 
    const [showCart, setShowCart] = useState(false); 
    const [category, setCategory] = useState(categoryParam);

   

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleViewProduct = (product?: any) => {
        setShowProductDetail(product);
    };

    return (
        <Fragment>
            <Header />
            <div className="max-w-7xl mx-auto p-4 text-center">
                {/* "Choose Categories" Text in Green */}
                <p className="text-sm text-green-500 mb-1 pt-6">Select Vegetables</p>

                {/* "Explore Categories" Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Fresh Vegetables</h2>

                {/* Product Grid */}
               
                <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id}  className="cursor-pointer">
                                     
                                    <Product2 product={product} view={handleViewProduct}/>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No products found</p>
                    )}
                </div>
            </div>

            <RightDrawer isOpen={showProductDetail || false} onClose={() => setShowProductDetail(null)}>
                <ProductDetail  />
            </RightDrawer> 

            <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)}>
                <Cart />
            </CartDrawer> 





            {!showProductDetail && !showCart && <div className="fixed bottom-20 right-2 z-50 flex flex-col space-y-2">
                <FloatingButtonWithTT
                    icon={<ShoppingCartIcon />} // Passing the icon
                    onClick={() => setShowCart(!showCart)} // Passing the click handler
                    tooltipContent="See your cart" // Custom tooltip text
                />
                <FloatingButtonWithTT
                    icon={<Search />} // Passing the icon
                    onClick={() => setShowSearch(!showSearch)} // Passing the click handler
                    tooltipContent="Search for products with Name, Tags" // Custom tooltip text
                />
                </div>
                }

            {/* Fixed Search Input (visible when clicked on search icon) */}
            {showSearch && (
                 <div className="fixed top-0 left-0 right-0 bg-green-900 p-4 z-50">
                 <div className="relative w-full">
                   <div className="flex items-center border border-gray-300 rounded-md bg-white">
                     <Select value={category || ""} onValueChange={setCategory}>
                       <SelectTrigger className="px-4 py-2 border-r border-gray-300 bg-gray-100 text-black w-36 rounded-l-md">
                         <SelectValue placeholder="All" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="0">All</SelectItem>
                         <SelectItem value="1">Category 1</SelectItem>
                         <SelectItem value="2">Category 2</SelectItem>
                         <SelectItem value="3">Category 3</SelectItem>
                         <SelectItem value="4">Category 4</SelectItem>
                         <SelectItem value="5">Category 5</SelectItem>
                         <SelectItem value="6">Category 6</SelectItem>
                       </SelectContent>
                     </Select>
           
                     <input
                       type="text"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       placeholder="Search products..."
                       className="w-full p-2 outline-none"
                     />
                   </div>
                 </div>
               </div>
            )}

            {showCategories && (
                <div className="fixed bottom-0 left-0 right-0 bg-green-900 p-4  z-50">
                    {/* <CategoryCarousel /> */}
                </div>
            )}

            <Footer />
        </Fragment>
    );
};

export default ProductList;
