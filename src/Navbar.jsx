import { useSelector } from "react-redux";

function Navbar({ currentPage, onNavigate }) {
  const cartItems = useSelector((state) => state.cart?.items ?? state.items ?? []);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const links = [
    { label: "Home", page: "home" },
    { label: "Plants", page: "plants" },
    { label: "Cart", page: "cart" },
  ];

  return (
    <nav className="site-navbar" aria-label="Main navigation">
      <a className="site-brand" href="#home" onClick={() => onNavigate("home")}>
        Paradise Nursery
      </a>
      <div className="site-nav-links">
        {links.map((link) => (
          <a
            className={currentPage === link.page ? "is-active" : ""}
            href={`#${link.page}`}
            key={link.page}
            onClick={() => onNavigate(link.page)}
          >
            {link.page === "cart" && (
              <span className="cart-icon" aria-hidden="true">
                🛒
              </span>
            )}
            <span>{link.label}</span>
            {link.page === "cart" && (
              <span aria-label={`${cartQuantity} items in cart`}>
                ({cartQuantity})
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;