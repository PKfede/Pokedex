import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import CardStats from "../components/CardStats";
import Pagination from "@mui/material/Pagination";
import styles from "../styles/app.module.css";
import CardList from "../components/CardList";

const Pokedex = () => {
<<<<<<< Updated upstream
  const [pokemon, setPokemon] = useState([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState({});
  const [pageNumber, setPage] = useState<number>(1);
  const [countNumber, setCount] = useState<number>(0);
  const [searching, setSearching] = useState(false);
  const [notFound, setFound] = useState(true);

=======
<<<<<<< HEAD
    const [pokemon, setPokemon] = useState<any[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [pageNumber, setPage] = useState<number>(1);
    const [countNumber, setCount] = useState<number>(0);
    const [searching, setSearching] = useState(false);


    const fetchOne = async () => {
        try {
            const apiData = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${searchInput}`
            );
            setSearching(true);
            setPokemon([apiData.data]);
        } catch (error) {
        }
    };

    const fetchAll = async () => {
        const apiData = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=6&offset=${(pageNumber - 1) * 6
            }`
        );
        setCount(apiData.data.count / 6);
        setPokemon(apiData.data.results);
    };

    useEffect(() => {

        if (searchInput !== "") {
            fetchOne();
        }
    }, [searchInput]);

    useEffect(() => {
        if (searchInput === "") {
            fetchAll();
        }
    }, [searchInput, pageNumber]);


    return (
        <div className={styles.screen}>
            <Search setSearchInput={setSearchInput} setSearching={setSearching} />
            <div className={styles.layout}>
                {searching && <CardStats data={pokemon[0]} />}
                {!searching && <div className={styles.layout}>
                    <CardList pokemon={pokemon} count={countNumber} setPage={setPage} setSearchInput={setSearchInput} />
                    <Pagination
                        size="large"
                        count={countNumber}
                        variant="outlined"
                        onChange={(e, page) => {
                            setPage(page);
                        }}
                    />
                </div>
                }
            </div>
        </div>
    );
=======
  const [pokemon, setPokemon] = useState([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState({});
  const [pageNumber, setPage] = useState<number>(1);
  const [countNumber, setCount] = useState<number>(0);
  const [searching, setSearching] = useState(false);
  const [notFound, setFound] = useState(true);

>>>>>>> Stashed changes
  useEffect(() => {
    const fetchApiSearch = async () => {
      try {
        const apiData = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${searchInput}`
        );
        setSearching(true);
        setSearchResult(apiData.data);
        setFound(true);
      } catch (error) {
        setFound(false);
      }
    };

    if (searchInput !== "") {
      fetchApiSearch();
    }
    if (searchInput === "") {
      setSearching(false);
    }
  }, [searchInput, notFound]);

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=6&offset=${
          (pageNumber - 1) * 6
        }`
      );
      setCount(apiData.data.count / 6);
      setPokemon(apiData.data.results);
    };

    fetchApi();
  }, [searchInput, pageNumber]);

  return (
    <div className={styles.screen}>
      <Search setSearchInput={setSearchInput} setFound={setFound} />
      <div className={styles.layout}>
        {searching && <CardStats found={notFound} data={searchResult} />}
        {!searching && (
          <div className={styles.layout}>
            <CardList
              pokemon={pokemon}
              found={notFound}
              countNumber={countNumber}
              setPage={setPage}
              setSearchInput={setSearchInput}
            />
          </div>
        )}
      </div>
    </div>
  );
<<<<<<< Updated upstream
=======
>>>>>>> 86ad2a3cb37cb749441b719f5ab1042e16462d6b
>>>>>>> Stashed changes
};

export default Pokedex;
