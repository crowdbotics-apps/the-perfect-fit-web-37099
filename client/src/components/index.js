export const ProductCard = ({ product }) => {
  const { sku, color } = product;
  return (
    <div class='product' data-retailer-sku={sku} data-retailer-color={color}>
      <img
        class='product-img'
        src={`https://via.placeholder.com/250x400?text=${sku}-${color}`}
        alt={`${sku}-${color}`}
      />
    </div>
  );
};
