import { useState } from "react";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Floral Dress",
      price: 1299,
      category: "Dress",
    },
    {
      id: 2,
      name: "Hand Bag",
      price: 999,
      category: "Bag",
    },
    {
      id: 3,
      name: "Necklace",
      price: 499,
      category: "Jewellery",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Shop</h1>

      <input
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
