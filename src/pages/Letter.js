import { useEffect, useState } from "react";
import "../App.css";

/* 500-word letter */
const fullLetter = `
Dear Roshan 💜

The day I confessed to you was the day my life turned upside down.
From every laugh we shared to every fight we had,
it only brought us closer.

You feel like the soft breeze of autumn against my skin.
Your kisses are the warmth on cold nights.
Your hugs are the cool air on summer evenings.
I never imagined I could get a boy like you,
someone who truly makes me feel my worth.

Every day with you feels like a new adventure.
My chaos and your calm, your roar and my sobs,
everything somehow balances perfectly.
We go together like Maggie and sauce —
not everyone’s favorite,
but once it suits you, it stays forever.

Roshan, I know I am not perfect.
I may not understand everything you go through,
but believe me, my love,
I am trying to become better every day for you.

You made me believe in myself.
You made me believe that I can thrive in life.
Thank you for that, my love.

Even though it has been just a month,
loving you comes naturally to me,
like I was born knowing how to do it.
And I promise it will only grow.

I may scream at you,
fight with you,
or even hurt you unintentionally.
If my ego ever stops me from apologizing,
please forgive me in advance.

No matter where life takes us,
I promise to choose you —
in the quiet moments,
the loud ones,
the happy days,
and the stormy nights.

Just promise to wait for me patiently,
and I will show you what loyalty truly means.

This letter is not the end.
It is the beginning of something beautiful.
And I want you to remember —
I, Harshita Smriti,
am deeply in love with you.

Forever yours,
Harshita 🖤
`;

export default function Letter() {
  const [arrived, setArrived] = useState(false);
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  // Envelope fly-in
  useEffect(() => {
    const t = setTimeout(() => setArrived(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Reset typing when opened
  useEffect(() => {
    if (opened) {
      setText("");
      setIndex(0);
      setFinished(false);
    }
  }, [opened]);

  // Word-by-word typing
  useEffect(() => {
    if (!opened) return;

    const words = fullLetter.split(" ");
    if (index < words.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + words[index] + " ");
        setIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    } else {
      setFinished(true); // typing done
    }
  }, [opened, index]);

  return (
    <div className="letter-page">

      {/* ✨ Sparkles */}
      <div className="sparkles">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 6 + Math.random() * 6 + "s",
              animationDelay: Math.random() * 5 + "s"
            }}
          />
        ))}
      </div>

      {!opened && (
        <div className={`envelope ${arrived ? "arrived" : ""}`}>
          <div
            className="envelope-body"
            onClick={() => setOpened(true)}
          >
            <div className="envelope-flap"></div>
            <div className="letter-paper"></div>
          </div>
          <p className="letter-hint">Click the letter ✨</p>
        </div>
      )}

      {opened && (
        <div className="letter-fullscreen">
          <div className="letter-frame">
        
        <div className="letter-content-wrapper">

  <pre className="typewriter">
    {text}
  </pre>

  {finished && (
    <div className="letter-footer">
      <div className="signature-block">
        <p>Forever yours,</p>
        <p>Harshita 🖤</p>
      </div>

      <button
        className="letter-game-btn"
        onClick={() => window.location.href = "/valentine"}
      >
        One more question 💜 →
      </button>
    </div>
  )}

</div>


          </div>
        </div>
      )}
    </div>
  );
}
