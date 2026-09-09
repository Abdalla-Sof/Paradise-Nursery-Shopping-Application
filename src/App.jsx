import { useState } from "react";
import "./App.css";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setShowProducts(page === "plants");
  };

  const handleGetStarted = () => {
    setShowProducts(true);
    setCurrentPage("plants");
  };

  if (showProducts && currentPage === "plants") {
    return (
      <>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <ProductList onNavigate={handleNavigate} />
      </>
    );
  }

  if (currentPage === "cart") {
    return (
      <>
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <CartItem onNavigate={handleNavigate} />
      </>
    );
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="landing-page background-image">
        <section className="landing-content" aria-labelledby="landing-title">
          <h1 id="landing-title">Welcome to Paradise Nursery</h1>
          <p>
            Bring the beauty of nature home with healthy, carefully selected
            houseplants for every space and every level of experience.
          </p>
          <button
            className="primary-button"
            onClick={handleGetStarted}
            type="button"
          >
            Get Started
          </button>
        </section>
      </main>
    </>
  );
}

export default App;