import { useState } from "react";
import ProfilePageClass from "./components/ProfilePageClass";
import RenderingPlayground from "./components/RenderingPlayground";
import UserStatus from "./components/UserStatus";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App =()=> {
   const [user, setUser] = useState(null);

  const toggleUser = () => {
    if (user === null) {
      setUser({
        name: "Rocky Alone",
        email: "rocky@example.com",
        isActive: true,
      });
    } else {
      setUser(null);
    }
  };
  return (
    <>    
    <ProfilePageClass />
    <div>
      <RenderingPlayground/>
    </div>

     <div style={{ padding: "20px" }}>
      <button onClick={toggleUser}>
        Toggle User
      </button>

      <UserStatus user={user} />
    </div>



     {/* 🔹 NAVBAR */}
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* 🔹 ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  )
}

export default App;
