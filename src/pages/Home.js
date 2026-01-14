import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-layout">

      {/* 💜 FLOATING HEARTS */}
      <div className="hearts">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 6 + Math.random() * 6 + "s",
              animationDelay: Math.random() * 5 + "s",
              opacity: Math.random()
            }}
          />
        ))}
      </div>

      {/* LEFT IMAGE */}
      <div className="left">
        <div className="frame">
          <img src={images[index]} className="photo" alt="memory" />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="right">
        <h1>Happy One Month My Love 🖤💜</h1>

        <p className="love-text">
          This small journey with you already feels like forever.
          Every smile, every memory, every moment — I treasure them all.
        </p>

        <Link to="/journey" className="btn">
          Start Our Journey →
        </Link>
      </div>

    </div>
  );
}
