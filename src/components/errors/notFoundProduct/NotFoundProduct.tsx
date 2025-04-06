import couldentFoundProduct from "../../../assets/images/couldentFoundProducts.jpg";

function NotFoundProduct() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <img src={couldentFoundProduct}
       alt="not found product"
       width='550px'
       />
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <h2 className="mt-2 text-lg mx-6 text-center">
        We couldn't locate the product you're looking for.
      </h2>
    </div>
  );
}

export default NotFoundProduct;
