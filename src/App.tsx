import { useEffect, useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import Search from "./components/Search";
import CardStats from "./components/CardStats";
import Pagination from "@mui/material/Pagination";
import styles from './styles/app.module.css'


function App() {

  const [pokemon, setPokemon] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<string>("")
  const [searchResult, setSearchResult] = useState<any>()
  const [pageNumber, setPage] = useState<number>(1)
  const [countNumber, setCount] = useState<number>(0)

  useEffect(() => {
    const fetchApiSearch = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchInput}`
      );
      setCount(apiData.data.count / 6)
      setSearchResult(apiData.data)
      console.log(apiData.data);

    };

    fetchApiSearch()

  }, [searchInput])

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=6&offset=${(pageNumber - 1) * 6}`
      );
      console.log(apiData.data);
      setPokemon(apiData.data.results);

    };


    console.log(pageNumber)

    fetchApi();


  }, [searchInput, pageNumber]);

  return (
    <>
      <div className={styles.screen}>
        <Search setSearchInput={setSearchInput} />
        <div className={styles.layout} >
          {
            searchInput.length > 0 ? (
              <CardStats data={searchResult || null} />
            ) : (<div className={styles.layout}>
              {pokemon.map((poke, index) => {
                return <Card key={index} name={poke.name} setSearchInput={setSearchInput} />;
              })}
              <Pagination size="large" count={countNumber} variant="outlined" onChange={(e, page) => {
                setPage(page)
              }} />
            </div >)

          }
        </div>

      </div>



    </>
  );
}

export default App;
