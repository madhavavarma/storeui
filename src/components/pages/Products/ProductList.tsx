import { Fragment, useState } from 'react';
import Product2 from '../Home/Product2';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';
import { Search, ShoppingCart, MenuIcon, Star, ShoppingCartIcon, EyeIcon, EyeClosedIcon } from 'lucide-react';
import { FloatingButtonWithTT } from '../Shared/FloatingButtonsWithTT';
import CategoryCarousel from '../Home/CategoryCarousel';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductDetailTabs } from './ProductDetailTabs';

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

    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false); 
    const [showCategories, setShowCategories] = useState(false); 
    const [showProductDetail, setShowProductDetail] = useState(false); 
    const [category, setCategory] = useState("");

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleViewProduct = (product: any) => {
        console.log(product);
        setShowProductDetail(true);
        // setSelectedProduct(product);
        // setIsDrawerOpen(true); // Open the Drawer when the product is selected
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
                            <div key={product.id} onClick={() => handleViewProduct(product)} className="cursor-pointer">
                                     
                                    <Product2 product={product} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No products found</p>
                    )}
                </div>
            </div>

            <Drawer open={showProductDetail}>
                <DrawerTrigger asChild>
                    {/* Trigger component here */}
                </DrawerTrigger>

                <DrawerContent className="bg-white">
                    <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle className="text-left flex justify-between">
                            <section>
                                {products[0].name}
                                {/* Rating */}
                                <div className="mt-1 flex">
                                    {/* 5 Stars */}
                                    {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-4 h-4 text-yellow-400 ${index < 4 ? "fill-current" : "text-gray-300"}`}
                                    />
                                    ))}
                                </div>
                            </section>
                            <section>
                                <DrawerClose asChild><EyeClosedIcon onClick={() => setShowProductDetail(false)} /></DrawerClose>
                            </section>
                        </DrawerTitle>
                    </DrawerHeader>

                    <DrawerDescription>
                        <ProductDetailTabs />
                    </DrawerDescription>

                    <DrawerFooter>
                        <div className="mt-3">
                        <Select>
                            {/* value={selectedSize} onValueChange={setSelectedSize} */}
                            <SelectTrigger>
                            <span>Small {100}</span>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="Small">Small {100}</SelectItem>
                            <SelectItem value="Medium">Medium {200}</SelectItem>
                            <SelectItem value="Large">Large {300}</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                        <div className="relative">
                            <input
                            id="quantity"
                            type="number"
                            min="1"
                            defaultValue={1}
                            className="w-10 text-center text-xs border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        <section>
                            {/* Add to Cart Button */}
                            <Button
                            variant="default"
                            size="sm"
                            // onClick={handleAddToCart}
                            className="px-3 py-1 text-xs font-medium bg-[#5DBF13]"
                            >
                            <ShoppingCartIcon />
                            </Button>

                            {/* View Product Button */}
                            <Button
                            variant="default"
                            size="sm"
                            // onClick={() => navigate("product/1")}
                            className="px-3 py-1 text-xs font-medium bg-[#5DBF13] ml-1"
                            >
                            <EyeIcon />
                            </Button>
                        </section>
                        </div>
                    </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>


            {/* Fixed Bottom Navigation Menu */}
            {/* <div className="fixed bottom-32 left-2 z-50">
                        <FloatingButtonWithTT
                            icon={<ShoppingCart />} // Passing the icon
                            onClick={() => setShowSearch(!showSearch)} // Passing the click handler
                            tooltipContent="Search for products with Name, Tags" // Custom tooltip text
                        />
                </div> */}
            
            {/* <div className="fixed bottom-32 left-2 z-50">
                <FloatingButtonWithTT
                    icon={<MenuIcon />} // Passing the icon
                    onClick={() => setShowCategories(!showCategories)} // Passing the click handler
                    tooltipContent="Search for products with Name, Tags" // Custom tooltip text
                />
            </div> */}
            
            <div className="fixed bottom-20 right-2 z-50">
                <FloatingButtonWithTT
                    icon={<Search />} // Passing the icon
                    onClick={() => setShowSearch(!showSearch)} // Passing the click handler
                    tooltipContent="Search for products with Name, Tags" // Custom tooltip text
                />
            </div>

            {/* Fixed Search Input (visible when clicked on search icon) */}
            {showSearch && (
                 <div className="fixed bottom-0 left-0 right-0 bg-green-900 p-4 z-50">
                 <div className="relative w-full">
                   <div className="flex items-center border border-gray-300 rounded-md bg-white">
                     <Select value={category} onValueChange={setCategory}>
                       <SelectTrigger className="px-4 py-2 border-r border-gray-300 bg-gray-100 text-black w-36 rounded-l-md">
                         <SelectValue placeholder="All" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="all">All</SelectItem>
                         <SelectItem value="electronics">Electronics</SelectItem>
                         <SelectItem value="fashion">Fashion</SelectItem>
                         <SelectItem value="home">Home & Kitchen</SelectItem>
                         <SelectItem value="books">Books</SelectItem>
                         <SelectItem value="toys">Toys</SelectItem>
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
