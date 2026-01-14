import { useState } from "react";
import "../App.css";

const sadMessages = [
  "Oh… that hurts a little 💔",
  "Are you sure? 🥺",
  "I’ll wait… 😔",
  "Please don’t say no 😢",
  "My heart is breaking… 💔",
  "I still choose you… 🖤",
  "This is making me sad 😞",
  "I won’t give up on us 💜"
];

export default function Valentine() {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const yesSize = 1 + noCount * 0.4; // grows each No click

  if (accepted) {
    return (
      <div className="valentine-screen success">
        <h1>YAY 💖</h1>
        <p>
          I knew it.  
          Thank you for choosing me — always. 🖤💜
        </p>
      </div>
    );
  }

  return (
    <div className="valentine-screen">
      <h1 className="question">
        Will you be with me for as long as we can? 💜
      </h1>

      {noCount > 0 && (
        <p className="sad-text">
          {sadMessages[Math.min(noCount - 1, sadMessages.length - 1)]}
        </p>
      )}

      <div className="buttons">
        <button
          className="yes-btn"
          style={{
            transform: `scale(${yesSize})`
          }}
          onClick={() => setAccepted(true)}
        >
          YES 💜
        </button>

        <button
          className="no-btn"
          onClick={() => setNoCount(noCount + 1)}
        >
          NO 💔
        </button>
      </div>
    </div>
  );
}
