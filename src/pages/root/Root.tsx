import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import heroBanner from "../../assets/images/pinkBannerSM.jpg";
import Carousel from "../../components/carousel/Carousel";
import banner from "../../assets/images/blueBanerSM.jpg";
import BestSellingBrands from "../../components/bestSellingBrands/BestSellingBrands";

function Root() {
  return (
    <>
      {/* === header === */}
      <Header />

      {/* === hero section === */}
      <section>
        <img src={heroBanner} alt="Hero banner with pink background" />
      </section>

      {/* === carousel section (best deal) === */}
      <section>
        <Carousel 
        title="Best Deals"
        className="w-[90%] bg-pink-100 mx-auto my-10 relative rounded-lg p-2 justify-center flex" />
      </section>

      {/* === banner === */}
      <section>
        <img src={banner} alt="Middle blue banner" />
      </section>

      {/* === best selling brands section === */}
      <section>
        <BestSellingBrands />
      </section>

      {/* === carousel section (best deal) === */}
      <section>
        <Carousel 
         className="w-[90%] bg-purple-100 mx-auto my-10 relative rounded-lg p-2 justify-center flex"
        title="Newest" />
      </section>

      {/* === footer === */}
      <Footer />
    </>
  );
}

export default Root;
