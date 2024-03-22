import Footer from "./Footer";
import Header from "./Header";
import React from "react";

function MainContent() {
  const foodExpiryDate = [
    { id: 1, title: "Apples", dueDate: "2024-03-25" },
    { id: 2, title: "Oranges", dueDate: "2024-04-01" },
    { id: 3, title: "Yogurt", dueDate: "2024-04-08" },
  ];

  return (
    <div>
      {Header()}
      <h2>Groceries List</h2>
      <ul>
        {foodExpiryDate.map((el) => (
          <li key={el.id}>
            <strong>{el.title}</strong> - Expires on {el.dueDate}
          </li>
        ))}
      </ul>
      {Footer()}
    </div>
  );
}

export default MainContent;
