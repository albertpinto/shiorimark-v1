import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import categoryReducer from "./categoryReducer";
import CategoryContext from "./categoryContext";

import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  GET_CATEGORY,
} from "../types";

const CategoryState = (props) => {
  const initial_state = {
    categories: [
      {
        id: "1",
        title: "Web development",
        created: "5/12/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
      {
        id: "2",
        title: "Marketing",
        created: "5/05/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
      {
        id: "3",
        title: "Sales",
        created: "5/03/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
      {
        id: "4",
        title: "Support",
        created: "5/03/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
      {
        id: "5",
        title: "Engineering",
        created: "5/04/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
      {
        id: "6",
        title: "Information Technology",
        created: "5/07/2020",
        user_id: "5eb1187913304d2cc4634c67",
      },
    ],
  };
  //console.log("initial_state:", initial_state);
  //const temp = (categoryReducer, initial_state);
  //console.log("temp:", temp);
  const [state, dispatch] = useReducer(categoryReducer, initial_state);

  //Add Category

  const addCategory = (category) => {
    category.id = uuid();
    dispatch({
      type: ADD_CATEGORY,
      payload: category,
    });
  };

  //Update Category
  //Delete Category
  //Get Category

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        addCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
