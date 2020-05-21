import React, { useContext, useRef, useState, useEffect } from "react";
import BookmarkContext from "../../context/bookmark/bookmarkContext";

const BookmarkFilter = () => {
  const bookmarkContext = useContext(BookmarkContext);
  const { filterBookmarks, clearFilter, filtered } = bookmarkContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterBookmarks(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Bookmarks"
        onChange={onChange}
      />
    </form>
  );
};

export default BookmarkFilter;
