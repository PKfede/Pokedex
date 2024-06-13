import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = ({ setSearchInput }: any) => {

    const [input, setInput] = useState('')

    return (
        <div>
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
            <button onClick={() => {
                setSearchInput(input)
            }}>Search</button>
            <button onClick={() => {
                setSearchInput('')
            }}>Reset</button>
        </div>
    );
};

export default Search;
