const Filters = ({
  search,
  setSearch,
  setCategory,
  setSort,
  clearFilters,
}) => {
  return (
    <div className="filters">
      <input
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filters;