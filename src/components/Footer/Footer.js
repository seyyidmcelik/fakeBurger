import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        color:"black",
        background: `linear-gradient(173.1deg, gray 35%, white 45%)`,
      }}
      className="p-3"
    >
      <h4>Fake Burger</h4>
      <h4>All Rights Reserved &copy;</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis,
        sapien mattis fermentum malesuada, tortor lectus luctus sapien, ut
        elementum ipsum dolor vel dolor.
      </p>
    </div>
  );
};

export default Footer;
