import { useState } from "react";
import styles from "../styles/search.module.css";

<<<<<<< Updated upstream
const Search = ({ setSearchInput, setFound }: any) => {
  const [input, setInput] = useState("");

=======
<<<<<<< HEAD
const Search = ({ setSearchInput, setSearching }: any) => {

    const [input, setInput] = useState('')

    const handleClickSearch = () => {
        setSearchInput(input)
    }
    const handleClickReset = () => {
        setSearchInput('')
        setSearching(false);
    }
    return (
        <div className={styles.SearchLayout}>
            <input className={styles.SearchInput} type="text" onChange={({ target: { value } }) =>
                setInput(value)
            } />
            <div className={styles.SearchButtonsLayout}>
                <button onClick={handleClickSearch}>Search</button>
                <button onClick={handleClickReset}>Reset</button>
            </div>

        </div>
    );
=======
const Search = ({ setSearchInput, setFound }: any) => {
  const [input, setInput] = useState("");

>>>>>>> Stashed changes
  return (
    <div className={styles.SearchLayout}>
      <input
        className={styles.SearchInput}
        placeholder="Type Pokemon"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className={styles.SearchButtonsLayout}>
        <button
          onClick={() => {
            setSearchInput(input);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchInput("");
            setFound(true);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
<<<<<<< Updated upstream
=======
>>>>>>> 86ad2a3cb37cb749441b719f5ab1042e16462d6b
>>>>>>> Stashed changes
};

export default Search;
