import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to='/home'>Home </Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
        <li>
          <Link to='/login'>Login </Link>
        </li>
        <li>
          <Link to='/register'>Register </Link>
        </li>
        <li>
          <Link to='/bookmarks'>Bookmarks </Link>
        </li>
        <li>
          <Link to='/categories'>Categories </Link>
        </li>
        <li>
          <Link to='/users'>Users </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Shiorimark',
  icon: 'fa fa-bookmark-o',
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Navbar;

// <nav className="navbar navbar-expand-sm navbar-dark bg-danger p-0">
//       <a href="/" className="navbar-brand">
//         <i className={icon}></i> {title}
//       </a>
//       <button
//         className="navbar-toggler"
//         data-toggle="collapse"
//         data-target="#navbarCollapse"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarCollapse">
//         <ul className="navbar-nav">
//           <li className="nav-item px-2">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="nav-item px-2">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item px-2">
//             <Link to="/bookmarks">Bookmarks</Link>
//           </li>
//           <li className="nav-item px-2">
//             <Link to="/categories">Categories</Link>
//           </li>
//           <li className="nav-item px-2">
//             <Link to="/users">Users</Link>
//           </li>
//         </ul>

//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item dropdown mr-3">
//             <a
//               href="#"
//               className="nav-link dropdown-toggle"
//               data-toggle="dropdown"
//             >
//               <i className="fas fa-user"></i> Welcome Albert
//             </a>
//             <div className="dropdown-menu">
//               <a href="profile.html" className="dropdown-item">
//                 <i className="fas fa-user-circle"></i> Profile
//               </a>
//               <a href="settings.html" className="dropdown-item">
//                 <i className="fas fa-cog"></i> Settings
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a href="login.html" className="nav-link">
//               <i className="fas fa-user-times"></i> Logout
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
