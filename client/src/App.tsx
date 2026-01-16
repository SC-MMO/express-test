import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import "./App.css";

import { Menu } from "./Menu.tsx";
import { Home } from "./Home.tsx";
import { Test } from "./Test.tsx";
import { Posts } from "./Posts.tsx";
import { Products, CarProducts, BikeProducts } from "./Products.tsx";
import { SignIn } from "./Sign-In.tsx";
import { SignUp } from "./Sign-Up.tsx";
import { PrivateRoutes } from "./Helpers.tsx";

function App() {
  return (
    <AppProvider>
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
            <Link to="/products">Products</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/test">Test</Link>
            <Link to="/sign-in">Sign-In</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/test" element={<Test />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Menu> </Menu>
    </AppProvider>
  );
}

export default App;
