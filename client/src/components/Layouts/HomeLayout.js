import React from "react";
import PropTypes from "prop-types";
import Header from "../Navbar/Header";

export default function HomeLayout({ children }) {
  return (
    <div style={{ flexGrow: 1, display: "flex" }}>
      <Header />
      <div
        style={{
          width: "100%",
          padding: 20,
          marginTop: 30,
          marginBottom: 20,
          overflowY: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.element,
};
