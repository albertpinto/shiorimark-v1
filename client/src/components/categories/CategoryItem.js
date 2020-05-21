import React from "react";

const CategoryItem = (category) => {
  const { id, title, created, user_id } = category.category;
  console.log("category:", category);
  return (
    <React.Fragment>
      <div key={id} className="card bg-light">
        <h3 className="text-primary text-left">
          <span className="badge-primary">
            {""}
            {title}
          </span>
        </h3>
        <ul className="list">
          {user_id && (
            <li>
              <i className="fas fa-link" /> {user_id}
            </li>
          )}
          {created && (
            <li>
              <i className="fas fa-calendar-day" /> {created}
            </li>
          )}
        </ul>
        <p>
          {" "}
          <button className="btn btn-dark btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default CategoryItem;
