import { useEffect, useState } from "react";

function ProductForm({ product, onSave, onClose }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const trimmedName = name.trim();
    const priceValue = Number(price);

    if (!trimmedName) {
      nextErrors.name = "กรุณากรอกชื่อสินค้า";
    }
    if (!price.trim() || Number.isNaN(priceValue) || priceValue <= 0) {
      nextErrors.price = "กรุณากรอกราคาเป็นตัวเลขที่มากกว่า 0";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSave({
      ...product,
      name: trimmedName,
      price: priceValue,
      category: category.trim(),
      image: image.trim(),
    });
  };

  return (
    <div
      className="details"
      role="dialog"
      aria-modal="true"
      aria-label={`แก้ไข ${product.name}`}
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
        <form className="form" onSubmit={handleSubmit} noValidate>
          <h2 className="details__name form__title">แก้ไขสินค้า</h2>

          <div className="field">
            <label className="field__label" htmlFor="form-name">
              ชื่อสินค้า
            </label>
            <input
              className="field__input"
              id="form-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <p className="field__error">{errors.name}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="form-price">
              ราคา (฿)
            </label>
            <input
              className="field__input"
              id="form-price"
              type="number"
              min="0"
              step="1"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              aria-invalid={Boolean(errors.price)}
            />
            {errors.price && <p className="field__error">{errors.price}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="form-category">
              หมวดหมู่
            </label>
            <input
              className="field__input"
              id="form-category"
              type="text"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="form-image">
              ลิงก์รูปภาพ
            </label>
            <input
              className="field__input"
              id="form-image"
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <div className="form__actions">
            <button
              className="button button--ghost"
              type="button"
              onClick={onClose}
            >
              ยกเลิก
            </button>
            <button className="button" type="submit">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
