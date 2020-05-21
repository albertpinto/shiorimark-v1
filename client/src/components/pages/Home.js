import React from "react";
import Bookmarks from "../../components/bookmarks/Bookmarks";
import BookmarkForm from "../bookmarks/BookmarkForm";
import BookmarkFilter from "../bookmarks/BookmarkFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <BookmarkForm />
      </div>
      <div>
        <BookmarkFilter />
        <Bookmarks />
      </div>
    </div>
  );
};

export default Home;
