import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import FilterBar from "./components/FilterBar";
import { products } from "./data/products";

const ALL = "ทั้งหมด";

const categories = [ALL, ...new Set(products.map((p) => p.category))];

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const visibleProducts = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return products.filter(
      (product) =>
        (category === ALL || product.category === category) &&
        product.name.toLowerCase().includes(keyword),
    );
  }, [query, category]);

  const resetFilters = () => {
    setQuery("");
    setCategory(ALL);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">แคตตาล็อกสินค้า</h1>
        <p className="header__subtitle">
          แสดง {visibleProducts.length} จาก {products.length} รายการ
        </p>
      </header>
      <main>
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
      </main>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;
