import { Fragment } from "react/jsx-runtime";
import Footer from "../../base/Footer";
import ProductCarousel from "./ProductCarousel";
import MainCarousel from "../../base/HeroCarousel";
import Header from "@/components/base/Header";

const Home: React.FC = () => {

  
  
  return (
    <Fragment>
      <Header />
      <section >
        <MainCarousel />
      </section>
      <section className="">
        <ProductCarousel />
        <ProductCarousel />        
        <ProductCarousel />        
      </section>
      <Footer />
      </Fragment>
  );
};

export default Home;
