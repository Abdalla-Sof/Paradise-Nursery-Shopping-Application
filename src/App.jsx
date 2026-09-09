import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  if (showProducts) {
    return <ProductList />;
  }

  return (
    <main className="landing-page background-image">
      <section className="landing-content" aria-labelledby="landing-title">
        <h1 id="landing-title">Welcome to Paradise Nursery</h1>
        <p>
          Bring the beauty of nature home with healthy, carefully selected
          houseplants for every space and every level of experience.
        </p>
        <button
          className="primary-button"
          onClick={() => setShowProducts(true)}
          type="button"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;