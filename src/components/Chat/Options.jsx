const Options = ({ options, onSelect }) => {
  return (
    <div className="options-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          className="opt-btn"
          onClick={() => onSelect(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Options;