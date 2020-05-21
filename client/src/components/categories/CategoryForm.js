import React, { useState, useContext } from "react";
import CategoryContext from "../../context/category/categoryContext";

const CategoryForm = () => {
  const categoryContext = useContext(CategoryContext);
  const { addCategory } = categoryContext;
  const [category, setCategory] = useState({
    id: "",
    title: "",
    created: "",
    user_id: "",
  });

  const { id, title, created, user_id } = category;
  const onChange = (e) => {
    e.preventDefault();
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit:", category);
    addCategory(category);
    setCategory({
      id: "",
      title: "",
      created: "",
      user_id: "",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-primary">Add Category</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="created"
        name="created"
        value={created}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="user_id"
        name="user_id"
        value={user_id}
        onChange={onChange}
      />
      <div className="">
        <input
          type="submit"
          value="Add Category"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default CategoryForm;
