import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import Search from "./components/Search";
import CardStats from "./components/CardStats";

function App() {

  const [pokemon, setPokemon] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("")
  const [searchResult, setSearchResult] = useState<any>()

  useEffect(() => {
    const fetchApiSearch = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchInput}`
      );
      setSearchResult(apiData.data)
    };

    fetchApiSearch()

  }, [searchInput])

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=30"
      );
      setPokemon(apiData.data.results);
    };

    fetchApi();


  }, [searchInput]);

  return (
    <>

      <Search setSearchInput={setSearchInput} />
      {
        searchInput.length > 0 ? (
          <div className="layout">
            <CardStats data={searchResult || null} />
          </div>
        ) : (<div className="layout">
          {pokemon.map((poke, index) => {
            return <Card key={index} name={poke.name} setSearchInput={setSearchInput} />;
          })}
        </div >)
      }

    </>
  );
}

export default App;
