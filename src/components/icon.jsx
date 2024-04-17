import React, { useState } from "react";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("/page1");

  const handleIconClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <img
        src="icon1.png"
        alt="Icon 1"
        onClick={() => handleIconClick("/page1")}
        className="cursor-pointer"
      />
      <img
        src="icon2.png"
        alt="Icon 2"
        onClick={() => handleIconClick("/page1")}
        className="cursor-pointer"
      />
      <img
        src="icon3.png"
        alt="Icon 3"
        onClick={() => handleIconClick("/page1")}
        className="cursor-pointer"
      />
      <img
        src="icon4.png"
        alt="Icon 4"
        onClick={() => handleIconClick("/page1")}
        className="cursor-pointer"
      />
    </div>
  );
}
