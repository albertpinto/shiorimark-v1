import react, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import BookmarkContext from "./bookmarkContext";
import bookmarkReducer from "./bookmarkReducer";
import {
  ADD_BOOKMARK,
  DELETE_BOOKMARK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOKMARK,
  FILTER_BOOKMARKS,
  CLEAR_FILTER,
} from "../types";
import React from "react";

const BookmarkState = (props) => {
  const initialState = {
    bookmarks: [
      {
        id: 1,
        url: "http://mail.yahoo.com",
        title: "Personal email",
        category: "Email",
        body:
          "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa nam cumque voluptatum. Possimus recusandae porro architecto officiis illo dignissimos ratione aut officia reprehenderit! Iure cum numquam fugit doloremque quis ullam illo odit, odio voluptates non quisquam laboriosam consectetur quasi perspiciatis! Sapiente minus aperiam nobis molestias autem ut praesentium laudantium?",
        created: "5/10/2020",
        user_id: "5ea9302a4422f7361c8ae959",
      },
      {
        id: 2,
        url: "http://www.emc.com",
        title: "My former companys website",
        category: "company website",
        body:
          "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa nam cumque voluptatum. Possimus recusandae porro architecto officiis illo dignissimos ratione aut officia reprehenderit! Iure cum numquam fugit doloremque quis ullam illo odit, odio voluptates non quisquam laboriosam consectetur quasi perspiciatis! Sapiente minus aperiam nobis molestias autem ut praesentium laudantium?",
        created: "5/10/2020",
        user_id: "5ea9302a4422f7361c8ae958",
      },
      {
        id: 3,
        url: "http://supportvectors.com",
        title: "My current company",
        category: "company website",
        body:
          "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa nam cumque voluptatum. Possimus recusandae porro architecto officiis illo dignissimos ratione aut officia reprehenderit! Iure cum numquam fugit doloremque quis ullam illo odit, odio voluptates non quisquam laboriosam consectetur quasi perspiciatis! Sapiente minus aperiam nobis molestias autem ut praesentium laudantium?",
        created: "5/10/2020",
        user_id: "5ea9302a4422f7361c8ae957",
      },
      {
        id: 4,
        url: "http://udemy.com",
        title: "Technical training website",
        category: "Online Education",
        body:
          "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa nam cumque voluptatum. Possimus recusandae porro architecto officiis illo dignissimos ratione aut officia reprehenderit! Iure cum numquam fugit doloremque quis ullam illo odit, odio voluptates non quisquam laboriosam consectetur quasi perspiciatis! Sapiente minus aperiam nobis molestias autem ut praesentium laudantium?",
        created: "5/10/2020",
        user_id: "5ea9302a4422f7361c8ae956",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(bookmarkReducer, initialState);
  console.log("dispatch :", dispatch);
  // Add Bookmark
  const addBookmark = (bookmark) => {
    bookmark.id = uuid();
    console.log("addBookmark:", bookmark.id);
    dispatch({ type: ADD_BOOKMARK, payload: bookmark });
  };

  //Update Bookmark

  const updateBookmark = (bookmark) => {
    dispatch({ type: UPDATE_BOOKMARK, payload: bookmark });
  };

  //Delete Bookmark
  const deleteBookmark = (id) => {
    dispatch({ type: DELETE_BOOKMARK, payload: id });
  };
  //Set Current Bookmark

  const setCurrent = (bookmark) => {
    dispatch({ type: SET_CURRENT, payload: bookmark });
  };
  //Clear current Bookmark

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  //Filter Bookmark

  const filterBookmarks = (text) => {
    dispatch({ type: FILTER_BOOKMARKS, payload: text });
  };

  //Clear Filter
  const clearFilter = () => dispatch({ type: CLEAR_FILTER });

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: state.bookmarks,
        current: state.current,
        filtered: state.filtered,
        addBookmark,
        updateBookmark,
        deleteBookmark,
        setCurrent,
        clearCurrent,
        filterBookmarks,
        clearFilter,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkState;
