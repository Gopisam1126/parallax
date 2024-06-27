import React, { useState, useEffect } from "react";
import Parallax from "./assets/component/parallax";
// import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-triangles"
      />
      <div className="Parallax__content">
        <Parallax />
        <Parallax />
        <Parallax />
        <Parallax />
        <Parallax />
        <Parallax />
      </div>
    </section>
  );
}

export default App;
