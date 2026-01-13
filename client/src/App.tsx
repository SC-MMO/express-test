import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Home } from "./Home.tsx";
import { About } from "./About.tsx";
import { Contact } from "./Contact.tsx";
import { Test } from "./Test.tsx";
import { Products, CarProducts, BikeProducts } from "./Products.tsx";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1rem",
          backgroundColor: "#ffffff",
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/test">Test</Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
