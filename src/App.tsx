import './App.css'
import 'tailwindcss/tailwind.css'
import Routing from './Routing';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IProduct } from './interfaces/IProduct';
import { getCategories, getProducts } from './helpers/api';
import { ProductActions } from './store/ProductSlice';
import { ICategory } from './interfaces/ICategory';
import { CategoryActions } from './store/CategorySlice';
 

const App: React.FC = () => {

  const dispatch = useDispatch();

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
    
  }, [dispatch]);
  
  return (
    <main className='bg-[#fcf8f8]' >
      <Routing />
      
    </main>
  );
};

export default App;
