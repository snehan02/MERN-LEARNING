function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Floral Dress",
      price: 1299,
    },
    {
      id: 2,
      name: "Hand Bag",
      price: 999,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Cart;