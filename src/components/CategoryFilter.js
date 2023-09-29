import React from "react";

function CategoryFilter({ categories, changeCategory, selectedCategory }) {
  const handleCategory = (e) => {
    changeCategory(e.target.value);
  };

  const displayCategories = categories.map((category) => (
    <button
      key={category}
      value={category}
      onClick={handleCategory}
      className={selectedCategory === category ? "selected" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
