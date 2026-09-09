import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

export const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Tropical",
    description: "A statement plant with bright, split leaves.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Bird of Paradise",
    category: "Tropical",
    description: "Bold foliage that brings a sunny, resort feel indoors.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Snake Plant",
    category: "Low Light",
    description: "A resilient, upright plant made for busy plant lovers.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "ZZ Plant",
    category: "Low Light",
    description: "Glossy leaves and an easy-care nature for darker corners.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1632207691144-2e71057e8c4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "String of Pearls",
    category: "Succulents",
    description: "Trailing green beads that look beautiful on a shelf.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1531112070209-d6d710f7f2d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Aloe Vera",
    category: "Succulents",
    description: "A sculptural, sun-loving succulent with practical charm.",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8f13f17?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All Plants");
  const categories = [
    "All Plants",
    ...new Set(plants.map((plant) => plant.category)),
  ];
  const visiblePlants =
    selectedCategory === "All Plants"
      ? plants
      : plants.filter((plant) => plant.category === selectedCategory);

  return (
    <main className="product-page">
      <header className="product-header">
        <p className="eyebrow">Paradise Nursery collection</p>
        <h1>Find your next houseplant</h1>
        <p>
          Explore easy-care favorites and leafy statement plants selected to
          make every room feel more alive.
        </p>
      </header>

      <nav className="category-filter" aria-label="Plant categories">
        {categories.map((category) => (
          <button
            className={
              selectedCategory === category
                ? "category-button is-active"
                : "category-button"
            }
            key={category}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="product-grid" aria-live="polite">
        {visiblePlants.map((plant) => (
          <article className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <div className="product-card-content">
              <p className="product-category">{plant.category}</p>
              <h2>{plant.name}</h2>
              <p>{plant.description}</p>
              <div className="product-card-footer">
                <strong>${plant.price.toFixed(2)}</strong>
                <button
                  className="primary-button"
                  onClick={() => dispatch(addItem(plant))}
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ProductList;