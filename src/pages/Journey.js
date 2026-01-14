import { useState } from "react";
import "../App.css";

const memories = [
  {
    image: "/journey/firstphoto.jpg",
    date: "07 Dec 2025",
    text: "Our first Photo. A moment that will always be engraved deep into my Heart."
  },
  {
    image: "/journey/proposal.png",
    date: "15 Dec 2025",
    text: "The moment you shared the feelings that I felt 🥹 It's the day I am so glad I lived."
  },
  {
    image: "/journey/clutcher.jpg",
    date: "18 Dec 2026",
    text: "My clutcher on you. The day I marked my teritory and my person🖤💜"
  },
  {
    image: "/journey/date.jpg",
    date: "19 Dec 2025",
    text: "Our dates may be simple, but every second with you is precious to me."
  },
  {
    image: "/journey/holding.jpg",
    date: "03 Jan 2025",
    text: "Every time I hold your hand, the world feels quieter and safer."
  }
];

export default function Journey() {
  const [active, setActive] = useState(null);

  return (
    <div className="journey">
      <h1>Our Journey 🖤💜</h1>

      <div className="timeline">
        {memories.map((_, i) => (
          <div
            key={i}
            className={`event ${i % 2 === 0 ? "left" : "right"}`}
            onClick={() => setActive(i)}
          >
            <div className="dot"></div>
          </div>
        ))}
      </div>

      <div className="journey-next">
        <button onClick={() => window.location.href = "/letter"}>
          Read My Letter →
        </button>
      </div>

      {active !== null && (
        <div className="popup" onClick={() => setActive(null)}>
          <div
            className="popup-card popup-split"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-left">
              <img src={memories[active].image} alt="memory" />
            </div>

            <div className="popup-right">
              <h3>{memories[active].date}</h3>
              <p>{memories[active].text}</p>
              <button onClick={() => setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
