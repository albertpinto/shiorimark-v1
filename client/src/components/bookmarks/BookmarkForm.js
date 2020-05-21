import React, { useState, useContext, useEffect } from "react";
import BookmarkContext from "../../context/bookmark/bookmarkContext";

const BookmarkForm = () => {
  const bookmarkContext = useContext(BookmarkContext);
  const {
    addBookmark,
    updateBookmark,
    current,
    clearCurrent,
  } = bookmarkContext;
  useEffect(() => {
    if (current !== null) {
      setBookmark(current);
    } else {
      setBookmark({
        id: "",
        url: "",
        title: "",
        category: "",
        body: "",
        created: "",
        user_id: "",
      });
    }
  }, [bookmarkContext, current]);
  const [bookmark, setBookmark] = useState({
    id: "",
    url: "",
    title: "",
    category: "",
    body: "",
    created: "",
    user_id: "",
  });
  const { id, url, title, category, body, created, user_id } = bookmark;
  const onChange = (e) => {
    e.preventDefault();
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit:", bookmark);
    if (current) {
      updateBookmark(bookmark);
    } else {
      addBookmark(bookmark);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-primary">
        {current ? "Edit Bookmark" : "Add Bookmark"}
      </h1>
      <input
        type="text"
        placeholder="Url"
        name="url"
        value={url}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Body"
        name="body"
        value={body}
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
      <div>
        <input
          type="submit"
          value={current ? "Update Bookmark" : "Add Bookmark"}
          className="btn btn-primary btn-block"
        />
      </div>

      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default BookmarkForm;
