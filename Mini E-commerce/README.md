# Mini E-Commerce React App

A simple **React-based e-commerce UI** demonstrating React fundamentals, state management, clean code, and responsive design. This project was built for an assignment to showcase React skills without using external UI libraries.

---

## 🚀 Features

### Product Listing
- Displays **products in a grid layout** (4 per row)
- Shows **product name, price, category, and stock quantity**
- **Add to Cart** button (disabled if out of stock)
- Hover effects on product cards with rounded borders
- Product images included

### Filters & Search
- Search products by name
- Filter products by category
- Sort products by price: Low → High, High → Low
- **Clear Filters** button to reset search and filters
- Filters and search work together seamlessly

### Cart
- Add items to cart
- Remove items from cart
- Update item quantity
- Quantity **cannot exceed available stock**
- Displays **total items and total price**
- Empty cart state handled clearly

### UI & UX
- Clean, modern design with rounded cards and subtle shadows
- Filters at top, cart at the bottom of the page
- Responsive grid layout
- Hover effects for products and buttons
- Stock quantity displayed for each product

---

## 🛠 Tech Stack

- **React** (Functional components only)
- **React Context API** for state management
- **CSS** for styling (no external UI libraries)
- **DummyJSON API** for product data
- Modern JavaScript (ES6+)
- Node.js & npm for package management

---

## 📂 Project Structure
src/
├── components/
│    ├── Cart.jsx
│    ├── CartItem.jsx
│    ├── Filters.jsx
│    ├── ProductCard.jsx
│    └── ProductList.jsx
├── context/
│    └── CartContext.jsx
├── hooks/
│    └── useProducts.js
├── App.jsx
└── index.css

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
npm install
npm run dev
```

