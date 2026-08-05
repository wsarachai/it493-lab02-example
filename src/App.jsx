import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import FilterBar from "./components/FilterBar";
import { products as initialProducts } from "./data/products";

const ALL = "ทั้งหมด";

function App() {
  const currentYear = new Date().getFullYear();
  const [products, setProducts] = useState(initialProducts);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = useMemo(
    () => [ALL, ...new Set(products.map((p) => p.category))],
    [products],
  );

  const visibleProducts = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return products.filter(
      (product) =>
        (category === ALL || product.category === category) &&
        product.name.toLowerCase().includes(keyword),
    );
  }, [products, query, category]);

  const resetFilters = () => {
    setQuery("");
    setCategory(ALL);
  };

  const handleSave = (updated) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === updated.id ? updated : product)),
    );
    setSelectedProduct(updated);
    setEditingProduct(null);
  };

  const featuredProduct = visibleProducts[0] ?? products[0];
  const averagePrice = products.length
    ? Math.round(
        products.reduce((sum, product) => sum + product.price, 0) /
          products.length,
      )
    : 0;

  return (
    <div className="app app--marketplace">
      <header className="shell-header">
        <div className="brand-lockup">
          <span className="brand-lockup__mark">SP</span>
          <div>
            <p className="brand-lockup__eyebrow">Stitch inspired marketplace</p>
            <h1 className="brand-lockup__title">แคตตาล็อกสินค้า</h1>
          </div>
        </div>
        <div className="header-metrics" aria-label="สรุปภาพรวมสินค้า">
          <div className="metric-card">
            <span className="metric-card__label">สินค้า</span>
            <strong className="metric-card__value">{products.length}</strong>
          </div>
          <div className="metric-card">
            <span className="metric-card__label">ที่กำลังแสดง</span>
            <strong className="metric-card__value">
              {visibleProducts.length}
            </strong>
          </div>
          <div className="metric-card">
            <span className="metric-card__label">ราคาเฉลี่ย</span>
            <strong className="metric-card__value">
              {averagePrice.toLocaleString("th-TH")} ฿
            </strong>
          </div>
        </div>
      </header>

      <main className="marketplace-grid">
        <aside className="marketplace-sidebar">
          <section className="hero-panel">
            <p className="hero-panel__eyebrow">Dark marketplace</p>
            <h2 className="hero-panel__title">
              เลือกดูสินค้าจากคอลเลกชันที่คัดมาแล้ว
            </h2>
            <p className="hero-panel__copy">
              โครงหน้าถูกจัดแบบ marketplace มืออาชีพ มีแถบตัวกรอง คำค้น
              และพื้นที่ รายการสินค้าแยกชัดเจน
            </p>
            <div className="hero-panel__actions">
              <button className="button" type="button" onClick={resetFilters}>
                ล้างตัวกรอง
              </button>
              <a className="button button--ghost" href="#catalog">
                ดูรายการทั้งหมด
              </a>
            </div>
          </section>

          <section className="summary-panel" aria-label="สินค้าขายดี">
            <div className="summary-panel__header">
              <p className="summary-panel__eyebrow">Featured item</p>
              <span className="summary-panel__badge">Live</span>
            </div>
            {featuredProduct && (
              <article className="summary-product">
                <img
                  className="summary-product__image"
                  src={featuredProduct.image}
                  alt=""
                />
                <div>
                  <p className="summary-product__category">
                    {featuredProduct.category}
                  </p>
                  <h3 className="summary-product__name">
                    {featuredProduct.name}
                  </h3>
                  <p className="summary-product__price">
                    {featuredProduct.price.toLocaleString("th-TH")} ฿
                  </p>
                </div>
              </article>
            )}
          </section>
        </aside>

        <section className="marketplace-main" id="catalog">
          <div className="catalog-toolbar">
            <div>
              <p className="catalog-toolbar__eyebrow">Browse products</p>
              <h2 className="catalog-toolbar__title">คอลเลกชันสินค้า</h2>
            </div>
            <p className="catalog-toolbar__meta">
              แสดง {visibleProducts.length} จาก {products.length} รายการ
            </p>
          </div>

          <FilterBar
            query={query}
            onQueryChange={setQuery}
            categories={categories}
            activeCategory={category}
            onCategoryChange={setCategory}
          />

          <ProductList
            products={visibleProducts}
            onSelect={setSelectedProduct}
            onReset={resetFilters}
          />
        </section>
      </main>

      {selectedProduct && !editingProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEdit={() => setEditingProduct(selectedProduct)}
        />
      )}
      {editingProduct && (
        <ProductForm
          product={editingProduct}
          onSave={handleSave}
          onClose={() => setEditingProduct(null)}
        />
      )}
      <footer className="marketplace-footer">
        <p className="marketplace-footer__text">
          {currentYear} · React + Vite marketplace shell
        </p>
        <p className="marketplace-footer__text">
          ค้นหา กรอง และเปิดดูรายละเอียดสินค้าได้จากหน้าเดียว
        </p>
      </footer>
    </div>
  );
}

export default App;
