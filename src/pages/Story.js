import "../App.css";

const story = [
  {
    title: "The Day We Met",
    date: "12 Dec 2025",
    text: "A spark ignited, a universe of possibilities opened up. I knew my life was about to change forever."
  },
  {
    title: "Our First 'I Love You'",
    date: "13 Dec 2025",
    text: "Three small words that felt bigger than the entire cosmos. My heart has been yours since."
  },
  {
    title: "Falling Deeper",
    date: "20 Dec 2025",
    text: "With every conversation, every laugh, I realized I was falling harder for you."
  },
  {
    title: "One Month Together",
    date: "12 Jan 2026",
    text: "Just one month, yet it feels like a lifetime of love. And this is only the beginning."
  }
];

export default function Story() {
  return (
    <div className="story-cinematic">
      <h1>Our Story</h1>

      <div className="cinema-timeline">
        {story.map((s, i) => (
          <div
            key={i}
            className={`cinema-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="cinema-card">
              <h3>{s.date}</h3>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
