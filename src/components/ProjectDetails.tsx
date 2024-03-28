import project_card from "../data/HomeData";

const ProductDetails = ({ match }) => {
  const productId = match.params.id;
  const product = Product.find((prod) => prod.id === parseInt(productId));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;