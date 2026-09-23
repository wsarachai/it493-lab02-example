import { useEffect } from "react";

function ProductDetails({ product, onClose, onEdit }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="details"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <div className="details__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="details__close"
          type="button"
          onClick={onClose}
          aria-label="ปิด"
        >
          ×
        </button>
        <img className="details__image" src={product.image} alt="" />
        <div className="details__body">
          <span className="details__category">{product.category}</span>
          <h2 className="details__name">{product.name}</h2>
          <p className="details__price">
            {product.price.toLocaleString("th-TH")} ฿
          </p>
          <p className="details__meta">รหัสสินค้า #{product.id}</p>
          <div className="details__actions">
            <button
              className="button button--ghost"
              type="button"
              onClick={onClose}
            >
              ปิดหน้าต่าง
            </button>
            <button className="button" type="button" onClick={onEdit}>
              แก้ไข
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
