import { Fragment } from "react/jsx-runtime";
import Footer from "../../base/Footer";
import ProductCarousel from "./ProductCarousel";
import MainCarousel from "../../base/HeroCarousel";
import Header from "@/components/base/Header";
import Features from "@/components/base/Features";
import CategoryCarousel from "./CategoryCarousel";
import MiniProductList from "./MiniProductList";
import { useEffect } from "react";
import { getCategories, getProducts } from "@/helpers/api";
import { useDispatch } from "react-redux";
import { IProduct } from "@/interfaces/IProduct";
import { ProductActions } from "@/store/ProductSlice";
import { ICategory } from "@/interfaces/ICategory";
import { CategoryActions } from "@/store/CategorySlice";

const Home: React.FC = () => {

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
    <Fragment>

      <Header />
      
      <section >
        <MainCarousel />
        <Features />
        <CategoryCarousel />
        <MiniProductList />
        <MainCarousel />
      </section>

      <section className="">
        <ProductCarousel heading="Welcome Offer" />
        <ProductCarousel heading="Deals" />        
        <ProductCarousel heading="Newly Added" />        
      </section>

      

      <Footer />

       
    </Fragment>
  );
};

export default Home;
