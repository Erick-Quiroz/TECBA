import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">EQ</div>
        <div className="text-white flex space-x-4">
          Diseño y Programación web I
        </div>
      </nav>
    </header>
  );
};

export default Header;
