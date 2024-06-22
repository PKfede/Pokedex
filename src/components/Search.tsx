import { useState } from "react";
import styles from '../styles/search.module.css'

const Search = ({ setSearchInput }: any) => {

    const [input, setInput] = useState('')

    return (
        <div className={styles.SearchLayout}>
            <input className={styles.SearchInput} type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
            <div className={styles.SearchButtonsLayout}>
                <button onClick={() => {
                    setSearchInput(input)
                }}>Search</button>
                <button onClick={() => {
                    setSearchInput('')
                }}>Reset</button>
            </div>

        </div>
    );
};

export default Search;
