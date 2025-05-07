import React from "react";

const dishes = [
  {
    name: "Kunafa",
    country: "Palestine",
    description:
      "A sweet dessert made with shredded pastry and cheese or cream.",
  },
  {
    name: "Kabsa",
    country: "Saudi Arabia",
    description: "A spiced rice dish with meat and vegetables.",
  },
  {
    name: "Machboos",
    country: "Kuwait",
    description: "A flavorful rice dish often served with tomato sauce.",
  },
  {
    name: "Shawarma",
    country: "Lebanon",
    description: "Roasted meat served in pita with garlic sauce.",
  },
];

export default function MiddleEastFood() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        中東の美食探訪 🌍🍽
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        Explore the rich and diverse flavors of Middle Eastern cuisine.
      </p>

      {dishes.map((dish) => (
        <div
          key={dish.name}
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.2rem" }}>
            {dish.name} ({dish.country})
          </h2>
          <p>{dish.description}</p>
        </div>
      ))}

      <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
        Follow us on Instagram & YouTube for more! 📸🎥
      </footer>
    </div>
  );
}
