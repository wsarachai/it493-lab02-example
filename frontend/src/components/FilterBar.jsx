function FilterBar({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="filters">
      <div className="search">
        <label className="visually-hidden" htmlFor="search">
          ค้นหาสินค้า
        </label>
        <span className="search__icon" aria-hidden="true" />
        <input
          className="search__input"
          id="search"
          type="search"
          placeholder="ค้นหาสินค้า..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <div className="chips" role="group" aria-label="กรองตามหมวดหมู่">
        {categories.map((category) => (
          <button
            key={category}
            className="chip"
            type="button"
            aria-pressed={category === activeCategory}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
