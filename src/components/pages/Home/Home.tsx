import { Fragment } from "react/jsx-runtime";
import Footer from "../../base/Footer";
import ProductCarousel from "./ProductCarousel";
import MainCarousel from "../../base/HeroCarousel";
import Header from "@/components/base/Header";
import Features from "@/components/base/Features";
import CategoryCarousel from "./CategoryCarousel";
import MiniProductList from "./MiniProductList";

const Home: React.FC = () => {
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
