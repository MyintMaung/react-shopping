import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="mt-5 px-5">
      <Container>
        <div className="flex justify-between">
          <h1 className="text-3xl">Online Shop</h1>
          <button className="border border-black px-5 py-2 relative">
            My Cart
            <span className="bg-red-500 text-white px-2 py-1 text-xs  absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              0
            </span>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
