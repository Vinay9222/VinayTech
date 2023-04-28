import React from "react";
import "./index.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>
          © {year} VinayTechnical. All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </>
  );
};

export default Footer;
