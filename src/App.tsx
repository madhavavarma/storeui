import './App.css'
import 'tailwindcss/tailwind.css'
import Routing from './Routing';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IProduct } from './interfaces/IProduct';
import { getCategories, getProducts } from './helpers/api';
import { ProductActions } from './store/ProductSlice';
import { ICategory } from './interfaces/ICategory';
import { CategoryActions } from './store/CategorySlice';
import RightDrawer from './components/pages/Shared/RightDrawer';
import ProductDetail from './components/pages/Products/ProductDetail';
import { IState } from './store/interfaces/IState';
import { CartActions } from './store/CartSlice';
import CartSynk from './components/pages/Cart/CartSynk';
 

const App: React.FC = () => {

  const dispatch = useDispatch();

  const productDetail = useSelector((state: IState) => state.Products.productDetail);

  const hideProductDetail = () => {
    dispatch(ProductActions.setProductDetail(null))
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProduct[] = await getProducts();
        dispatch(ProductActions.setProducts(products));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categories: ICategory[] = await getCategories();
        dispatch(CategoryActions.setCategories(categories));
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        dispatch(CartActions.loadCart(parsed)); // We'll add this reducer below
      } catch (e) {
        console.error("Failed to load cart from localStorage", e);
      }
    } else {
      console.log("no cart items")
    }
    
  }, [dispatch]);
  
  return (
    <main className='bg-[#fcf8f8]' >
      <Routing />

      {/* Product Detail Drawer */}
      {productDetail && (
        <RightDrawer isOpen onClose={() => hideProductDetail()}>
          <ProductDetail product={productDetail} />
        </RightDrawer>
      )}

      <CartSynk />
      
    </main>
  );
};

export default App;
