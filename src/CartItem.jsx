import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items ?? state.items ?? []);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    window.alert("Checkout is coming soon.");
  };

  return (
    <main className="cart-page">
      <header className="cart-header">
        <p className="eyebrow">Your plant collection</p>
        <h1>Shopping Cart</h1>
        <p>Review your plants, adjust quantities, and get your order ready.</p>
      </header>

      {cartItems.length === 0 ? (
        <section className="empty-cart" aria-live="polite">
          <h2>Your cart is waiting for a little green.</h2>
          <p>Add a plant from our collection to get started.</p>
          <button className="primary-button" onClick={() => onNavigate("plants")} type="button">
            Continue Shopping
          </button>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Selected plants">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="product-category">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity - 1,
                          }),
                        )
                      }
                      type="button"
                    >
                      -
                    </button>
                    <span aria-label={`${item.quantity} items`}>
                      {item.quantity}
                    </span>
                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-item-total">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-summary" aria-label="Order summary">
            <h2>Order Summary</h2>
            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="primary-button" onClick={handleCheckout} type="button">
              Checkout
            </button>
            <button className="secondary-button" onClick={() => onNavigate("plants")} type="button">
              Continue Shopping
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default CartItem;