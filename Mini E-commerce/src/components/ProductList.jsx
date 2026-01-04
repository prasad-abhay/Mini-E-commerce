import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

const ProductList = ({ products }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
  };

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search)
      data = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );

    if (category)
      data = data.filter(p => p.category === category);

    if (sort === "low") data.sort((a, b) => a.price - b.price);
    if (sort === "high") data.sort((a, b) => b.price - a.price);

    return data;
  }, [products, search, category, sort]);

  return (
    <div className="product-section">
      <Filters
        search={search}
        setSearch={setSearch}
        setCategory={setCategory}
        setSort={setSort}
        clearFilters={clearFilters}
      />

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty">No products found</p>
      )}
    </div>
  );
};

export default ProductList;