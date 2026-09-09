import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    name: "Rubber Plant",
    category: "Tropical",
    description: "Deep green leaves and a confident, upright silhouette.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Calathea Orbifolia",
    category: "Tropical",
    description: "Striped, rounded leaves that bring pattern to a room.",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    category: "Tropical",
    description: "Large violin-shaped leaves for a dramatic focal point.",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1597055181300-df90f7b5a3a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Prayer Plant",
    category: "Tropical",
    description: "Colorful foliage that folds its leaves at night.",
    price: 28.99,
    image:
      "https://images.unsplash.com/photo-1616766402095-4d7b6f8b8f7a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Snake Plant",
    category: "Low Light",
    description: "A resilient, upright plant made for busy plant lovers.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2bb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "ZZ Plant",
    category: "Low Light",
    description: "Glossy leaves and an easy-care nature for darker corners.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1632207691144-2e71057e8c4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Cast Iron Plant",
    category: "Low Light",
    description: "A durable leafy companion that tolerates neglect with grace.",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1620127252536-03bdfcf6f7c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Chinese Evergreen",
    category: "Low Light",
    description: "Silvery leaves that brighten low-light rooms with ease.",
    price: 31.99,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Parlor Palm",
    category: "Low Light",
    description: "A graceful palm that adds a soft, airy vertical shape.",
    price: 36.99,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Peace Lily",
    category: "Low Light",
    description: "Elegant white blooms and lush leaves for calm interiors.",
    price: 26.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "String of Pearls",
    category: "Succulents",
    description: "Trailing green beads that look beautiful on a shelf.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1531112070209-d6d710f7f2d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Aloe Vera",
    category: "Succulents",
    description: "A sculptural, sun-loving succulent with practical charm.",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8f13f17?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Zebra Haworthia",
    category: "Succulents",
    description: "A compact striped succulent for desks and sunny windows.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Echeveria Rose",
    category: "Succulents",
    description: "A neat rosette with cool tones and sculptural symmetry.",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Jade Plant",
    category: "Succulents",
    description: "A long-lived favorite with rounded, glossy leaves.",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Panda Plant",
    category: "Succulents",
    description: "Soft, silvery leaves with charming chocolate-colored tips.",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items ?? state.items ?? []);
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All Plants");
  const categories = [
    "All Plants",
    ...new Set(plants.map((plant) => plant.category)),
  ];
  const visiblePlants =
    selectedCategory === "All Plants"
      ? plants
      : plants.filter((plant) => plant.category === selectedCategory);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((currentItems) => ({ ...currentItems, [plant.name]: true }));
  };

  return (
    <main className="product-page" id="plants">
      <header className="product-header">
        <p className="eyebrow">Paradise Nursery collection</p>
        <h1>Find your next houseplant</h1>
        <p>
          Explore easy-care favorites and leafy statement plants selected to
          make every room feel more alive.
        </p>
        <p className="cart-status" aria-live="polite">
          Cart: {cartQuantity} {cartQuantity === 1 ? "item" : "items"}
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
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                  type="button"
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
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