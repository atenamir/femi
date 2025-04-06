import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CartContent from "../../components/cartContent/CartContent";
import { useProductsState } from "../../store/products/productStore";
import ErrorMessage from "../../components/errors/error/ErrorMessage";

function Cart() {
  const { error } = useProductsState();
  return (
    <div>
      {/* === header === */}
      <Header />
      {/* === Content === */}
      {error ? (
        <ErrorMessage />
      ) : (
        <main>
          <CartContent />
        </main>
      )}
      {/* ==== footer ==== */}
      <Footer />
    </div>
  );
}

export default Cart;
