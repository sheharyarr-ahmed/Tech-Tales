function FakeDarkModeToggle({ isFakeDark, onToggle }) {
  return (
    <button onClick={onToggle} className="btn-fake-dark-mode">
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default FakeDarkModeToggle;
