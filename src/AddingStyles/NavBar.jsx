import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="h-18 border-2 bg-red-700 border-red flex">
        <aside className="basis-1/3 flex justify-center items-center border-2 left">
          <img
            src="https://www.pngkey.com/png/full/176-1762191_spiderman-symbol-clipart-ultimate-spider-man-logo.png"
            alt="spidermanLogo"
            className="h-14"
          />
          <h1 className="text-white bg-red-700">SPIDERMAN</h1>
        </aside>
        <aside className="basis-1/3 flex justify-center items-center border-4 border-green-900 center"></aside>
        <aside className="basis-1/3 flex justify-center items-center  border-4 border-red-900 right"></aside>
      </nav>
    </div>
  );
}

export default NavBar;
