import ProductCard from "./ProductCard";

function ProductList({ products, onSelect, onReset }) {
  if (products.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">ไม่พบสินค้าที่ค้นหา</p>
        <p className="empty__hint">ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น</p>
        <button className="button" type="button" onClick={onReset}>
          ล้างตัวกรอง
        </button>
      </div>
    );
  }

  return (
    <ul className="grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
