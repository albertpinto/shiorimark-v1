import React from "react";
import PropTypes from "prop-types";
//FOOTER -->

const Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id="main-footer" className="bg-primary text-white mt-5 p-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center">
              Copyright &copy; {props.title}&nbsp;
              <span>{year}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.defaultProps = {
  title: "Shiorimark",
};
Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
