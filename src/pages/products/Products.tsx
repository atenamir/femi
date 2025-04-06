import { useSearchParams } from "react-router-dom";
import { useProductsState } from "../../store/products/productStore";
import { useEffect, useState } from "react";
import ProductsSectionGrid from "../../components/productsContent/ProductsContentSection";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { CiFilter } from "react-icons/ci";
import ErrorMessage from "../../components/errors/error/ErrorMessage";
import FilteringSide from "../../components/filterMenu/FilterMenu";
import SidebarFilter from "../../components/filterMenu/SidebarFilter";
import NotFoundProduct from "../../components/errors/notFoundProduct/NotFoundProduct";

function Products() {
  const [searchParam] = useSearchParams();
  const brand = searchParam.get("brand");
  const productType = searchParam.get("product_type");
  const { getAllProduct, filterProducts, error, filteredList } = useProductsState();

  // === calling products and filtered them with searchParam(by brand) ===
  useEffect(() => {
    const products = async () => {
      await getAllProduct();

      const filterObject: { brand?: string; product_type?: string } = {};

      if (brand) {
        filterObject.brand = brand;
      }

      if (productType) {
        filterObject.product_type = productType;
      }

      filterProducts(filterObject);
    };

    products();
  }, [brand, productType]);

  // ==== useState for close/opening filter menu ====
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      {/* === header ==== */}
      <Header />
      {error ? (
        <ErrorMessage />
      ) : (
        <div>
          {/* === filter button === */}
          
          <FilteringSide isOpen={isOpen} setIsOpen={setisOpen} />
          <button
            className="flex ml-12 items-center py-2 w-10 justify-center rounded-xl bg-pink-300
        text-white active:scale-90 transition cursor-pointer lg:hidden"
         onClick={()=>setisOpen(true)}
         >
            <CiFilter className="mx-1 text-xl" title="filter" />
          </button>

          {/* === content === */}
          <main className="lg:grid lg:grid-cols-3">
            {/* ===products item === */}
            {filteredList.length >0? <section className="lg:col-span-2">
              <ProductsSectionGrid />
            </section> :<section className=" col-span-2">
            <NotFoundProduct />
            </section> }
           
            {/* === fitering for desktop mode ==== */}
            <section className="hidden lg:block">
              <SidebarFilter />
            </section>
          </main>
        </div>
      )}

      {/* ==== footer === */}
      <Footer />
    </div>
  );
}

export default Products;
