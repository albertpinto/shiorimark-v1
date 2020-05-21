import React from "react";
import Categories from "../categories/Categories";
import CategoryForm from "../categories/CategoryForm";

const CategoriesPage = () => {
  return (
    <div className="grid-2">
      <div>
        <CategoryForm />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};

export default CategoriesPage;
