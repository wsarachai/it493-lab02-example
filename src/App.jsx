import { useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm";
import FilterBar from "./components/FilterBar";
import { products as initialProducts } from "./data/products";

const ALL = "ทั้งหมด";

function App() {
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
    </div>
  );
}

export default App;
