import "./index.css";
import React, { useState } from "react";
import MenuData from "./data";
import Categories from "./Categories";
import Menu from "./menu";
const allCategories = [
  "all",
  ...new Set(MenuData.map((item) => item.category)),
];

function App() {
  const [menuItems, setIsMenuItems] = useState(MenuData);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setIsMenuItems(MenuData);
      return;
    }
    const newfilterItems = MenuData.filter(
      (item) => item.category === category
    );
    setIsMenuItems(newfilterItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu MenuData={menuItems} />
      </section>
    </main>
  );
}

export default App;
