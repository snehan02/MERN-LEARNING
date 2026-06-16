import Navbar from "../components/Navbar";
import "./Home.css";

import shop1 from "../assets/shop1.avif";
import shop2 from "../assets/shop2.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Wear Your <span>Style</span>
          </h1>

          <h2>Fashion That Speaks For You</h2>

          <p>
            Discover premium collections crafted for every mood, every occasion,
            and every version of you. Elevate your wardrobe with timeless
            fashion.
          </p>

          <button className="shop-btn">Shop Collection</button>
        </div>

        <div className="hero-images">
          <div className="image-card left">
            <img src={shop1} alt="Fashion Collection" />
          </div>

          <div className="image-card center">
            <img src={shop1} alt="Fashion Collection" />
          </div>

          <div className="image-card right">
            <img src={shop2} alt="Fashion Collection" />
          </div>
        </div>
      </section>

      <section className="categories">
        <h5>Categories</h5>
        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="https://picsum.photos/300?11" alt="Women" />
            <h3>Women</h3>
          </div>

          <div className="category-card">
            <img src="https://picsum.photos/300?12" alt="Men" />
            <h3>Men</h3>
          </div>

          <div className="category-card">
            <img src="https://picsum.photos/300?13" alt="Accessories" />
            <h3>Accessories</h3>
          </div>

          <div className="category-card">
            <img src="https://picsum.photos/300?14" alt="Footwear" />
            <h3>Footwear</h3>
          </div>
        </div>
      </section>

      <section className="best-sellers">
        <h5>Trending Collection</h5>
        <h2>Best Sellers</h2>

        <div className="products">
          <div className="card">
            <span className="badge">Trending</span>
            <img src={shop1} alt="Oversized Hoodie" />
            <h3>Oversized Hoodie</h3>
            <p>₹1,499</p>
          </div>

          <div className="card">
            <span className="badge">Best Seller</span>
            <img src={shop2} alt="Denim Jacket" />
            <h3>Denim Jacket</h3>
            <p>₹2,299</p>
          </div>

          <div className="card">
            <span className="badge">Popular</span>
            <img src={shop1} alt="Premium Sneakers" />
            <h3>Premium Sneakers</h3>
            <p>₹3,499</p>
          </div>

          <div className="card">
            <span className="badge">New</span>
            <img src={shop2} alt="Leather Tote Bag" />
            <h3>Leather Tote Bag</h3>
            <p>₹1,999</p>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="offer-glow glow-1"></div>
        <div className="offer-glow glow-2"></div>

        <div className="offer-content">
          <span className="offer-tag">LIMITED TIME OFFER</span>

          <h2>Summer Sale 2026</h2>

          <p>
            Upgrade your wardrobe with the latest fashion trends. Enjoy up to
            50% OFF on selected collections.
          </p>

          <button>Shop Now →</button>
        </div>
      </section>

      <section className="testimonials">
        <h5>Customer Reviews</h5>
        <h2>Loved By Thousands</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
            />

            <div className="stars">★★★★★</div>

            <p>
              "Absolutely loved the quality and fit. The collection is stylish,
              affordable, and arrived earlier than expected."
            </p>

            <h4>Sarah Johnson</h4>
            <span>Fashion Enthusiast</span>
          </div>

          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Miller"
            />

            <div className="stars">★★★★★</div>

            <p>
              "Great customer service and premium quality. This has become my
              favorite fashion store."
            </p>

            <h4>John Miller</h4>
            <span>Verified Buyer</span>
          </div>

          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Emma Wilson"
            />

            <div className="stars">★★★★★</div>

            <p>
              "The designs are trendy and unique. Every purchase has exceeded my
              expectations."
            </p>

            <h4>Emma Wilson</h4>
            <span>Premium Member</span>
          </div>
        </div>
      </section>

      <section className="brands">
        <h5>Trusted By</h5>
        <h2>Our Brand Partners</h2>

        <div className="marquee">
          <div className="marquee-content">
            <span>Nike</span>
            <span>Adidas</span>
            <span>Puma</span>
            <span>Zara</span>
            <span>H&M</span>
            <span>Levi's</span>
            <span>Gucci</span>
            <span>Louis Vuitton</span>

            <span>Nike</span>
            <span>Adidas</span>
            <span>Puma</span>
            <span>Zara</span>
            <span>H&M</span>
            <span>Levi's</span>
            <span>Gucci</span>
            <span>Louis Vuitton</span>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe To Our Newsletter</h2>

        <p>Get updates on new arrivals and special offers.</p>

        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      <section className="why-us">
        <h5>Why Shop With Us</h5>

        <h2>Experience Fashion Like Never Before</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Premium Quality</h3>
            <p>
              Handpicked collections crafted with quality fabrics and timeless
              designs.
            </p>
          </div>

          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>
              Quick and reliable shipping to get your favorite styles at your
              doorstep.
            </p>
          </div>

          <div className="feature-card">
            <h3>Affordable Luxury</h3>
            <p>
              Trendy fashion pieces at prices you'll love without compromising
              quality.
            </p>
          </div>

          <div className="feature-card">
            <h3>Easy Returns</h3>
            <p>
              Hassle-free returns and exchanges for a stress-free shopping
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <h2>
            Shop<span>Zee</span>
          </h2>

          <p>
            Discover the latest fashion trends, premium collections, and
            timeless styles curated just for you.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>New Arrivals</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>

          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>Footwear</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>support@shopzee.com</p>
          <p>+91 9876543210</p>
          <p>Bangalore, India</p>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>© 2026 ShopZee. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Home;
