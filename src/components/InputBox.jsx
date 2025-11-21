import React from "react";


function buildSegments(text, highlights) {
  const segments = [];
  let currentIndex = 0;

  // Find locations of each highlight in the text
  const mapped = highlights
    .map((h) => ({
      ...h,
      index: text.toLowerCase().indexOf(h.text.toLowerCase()),
    }))
    .filter((h) => h.index !== -1)
    .sort((a, b) => a.index - b.index);

  mapped.forEach((h) => {
    if (h.index > currentIndex) {
      segments.push({
        type: "normal",
        text: text.slice(currentIndex, h.index),
      });
    }

    segments.push({
      type: "highlight",
      text: text.slice(h.index, h.index + h.text.length),
      id: h.id,
    });

    currentIndex = h.index + h.text.length;
  });

  if (currentIndex < text.length) {
    segments.push({
      type: "normal",
      text: text.slice(currentIndex),
    });
  }

  return segments;
}

const InputBox = ({ text, highlights }) => {
  const segments = buildSegments(text, highlights);

  return (
    <div className="box input-box">
      <h2 className="box-title">Input</h2>
      <div className="box-content">
        {segments.map((seg, idx) =>
          seg.type === "normal" ? (
            <span key={idx}>{seg.text}</span>
          ) : (
            <span
              key={idx}
              id={`input-${seg.id}`}
              className="input-highlight"
            >
              {seg.text}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default InputBox;
