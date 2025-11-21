
const OutputBox = ({ highlights, onClickPhrase }) => {
  return (
    <div className="box output-box">
      <h2 className="box-title">Output</h2>
      <div className="box-content">

        {highlights.map(h => (
          <span key={h.id} className="output-line">

            {h.clickable ? (
              // clickable highlight
              <span
                className="output-highlight clickable"
                onClick={() => onClickPhrase(h.id)}
              >
                {h.text}
              </span>
            ) : (
              // non–clickable highlight
              <span className="output-highlight not-clickable">
                {h.text}
              </span>
            )}

          </span>
        ))}

      </div>
    </div>
  );
};

export default OutputBox;
