function ProductCard({ product, onSelect }) {
  return (
    <button
      className="card"
      type="button"
      onClick={() => onSelect(product)}
      aria-label={`ดูรายละเอียด ${product.name}`}
    >
      <img
        className="card__image"
        src={product.image}
        alt=""
        width="400"
        height="400"
        loading="lazy"
      />
      <span className="card__name">{product.name}</span>
      <span className="card__category">{product.category}</span>
      <span className="card__price">
        {product.price.toLocaleString("th-TH")} ฿
      </span>
    </button>
  );
}

export default ProductCard;
