function Profile() {
  const orders = ["Floral Dress", "Hand Bag"];

  const wishlist = ["Necklace", "Sunglasses"];

  return (
    <div>
      <h1>My Profile</h1>

      <h2>User Information</h2>

      <p>Name: Sneha</p>
      <p>Email: sneha@gmail.com</p>

      <h2>Orders</h2>

      <ul>
        {orders.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Wishlist</h2>

      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
