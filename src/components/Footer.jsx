import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-black mx-5 py-2 mt-auto text-white text-center">
      &copy; {date.getFullYear()} Myint Online Shop. All right reserved.
    </footer>
  );
};

export default Footer;
