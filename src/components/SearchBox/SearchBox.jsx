import style from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={style.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
