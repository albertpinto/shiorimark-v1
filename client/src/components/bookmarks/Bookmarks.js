import React, { useContext, Fragment } from "react";
import BookmarkContext from "../../context/bookmark/bookmarkContext";
import BookmarkItem from "./BookmarkItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Bookmarks = () => {
  const bookmarkContext = useContext(BookmarkContext);
  const { bookmarks, filtered } = bookmarkContext;
  if (bookmarks.length === 0) {
    return <h4>Please Add a Bookmark</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((bookmark) => (
              <CSSTransition key={bookmark.id} timeout={1000} classes="my-node">
                <BookmarkItem bookmark={bookmark} />
              </CSSTransition>
            ))
          : bookmarks.map((bookmark) => (
              <CSSTransition key={bookmark.id} timeout={1000} classes="my-node">
                <BookmarkItem bookmark={bookmark} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Bookmarks;

//<Fragment>
// <section id="Bookmarks">
// <div class="container">
//   <div class="row">
//     <div class="col-md-9">
//       <div class="card">
//         <div class="card-header">
//           <h4>Latest Bookmarks</h4>
//         </div>
//         <table class="table table-striped">
//           <thead class="thead-dark">
//             <tr>
//               <th>#</th>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Date</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookmarks.map((bookmark) => (
//               <BookmarkItem Key={bookmark.id} Bookmark={bookmark} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>
// </section>
// </Fragment>
