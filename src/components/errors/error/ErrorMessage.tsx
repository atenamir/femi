import { useProductsState } from "../../../store/products/productStore";
import errorEmage from '../../../assets/images/error.png'

function ErrorMessage() {
  const { error } = useProductsState();
  return (
    <div>
      {error && (
        <div className="flex items-center justify-center h-[77vh] w-full flex-col">
<img src={errorEmage} alt="" className="md:w-[450px]"/>
          <h1 className="text-center text-2xl">
            Opss ... <h5 className="mt-3">{error}</h5>
          </h1>
        </div>
      )}
    </div>
  );
}

export default ErrorMessage;
