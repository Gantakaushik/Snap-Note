import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ GANTA KAUSHIK {year} </p>
    </footer>
  );
}

export default Footer;
