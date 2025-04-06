import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsState } from "../../store/products/productStore";
import ProductDetail from "../../components/productDetail/ProductDetail";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ErrorMessage from "../../components/errors/error/ErrorMessage";

function ProductDetails() {
  // === get product's id ===
  const { id } = useParams();
  const { products, getAllProduct , error } = useProductsState();
  // === getting data from api with fetchAPI function ===
  useEffect(() => {
    getAllProduct();
  }, []);
  // === find product ===
  const product = products.find((item) => {
    return item.id.toString() == id;
  });

  return (
    <div className="w-full">
      <Header />
      {error ? <ErrorMessage />:(
        <ProductDetail {...product} />
      )}
    <Footer />
    </div>
  );
}

export default ProductDetails;
