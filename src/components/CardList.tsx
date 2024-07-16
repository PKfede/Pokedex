import React from "react";
import Card from "./Card";
import { Pagination } from "@mui/material";

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
const CardList = ({ pokemon, setSearchInput }: any) => {
    return (
        <>
            {!pokemon && <p>Not Found</p>}
            {pokemon && pokemon.map((poke: any, index: any) => {
                return (
                    <Card
                        key={index}
                        name={poke.name}
                        setSearchInput={setSearchInput}
                    />
                );
            }
=======
>>>>>>> Stashed changes
const CardList = ({
  pokemon,
  found,
  countNumber,
  setPage,
  setSearchInput,
}: any) => {
  if (!found) {
    return <p>not found2</p>;
  }
<<<<<<< Updated upstream
=======
>>>>>>> 86ad2a3cb37cb749441b719f5ab1042e16462d6b
>>>>>>> Stashed changes

  return (
    <>
      {pokemon.map((poke: any, index: any) => {
        return (
          <Card key={index} name={poke.name} setSearchInput={setSearchInput} />
        );
      })}
      <Pagination
        size="large"
        count={countNumber}
        variant="outlined"
        onChange={(e, page) => {
          setPage(page);
        }}
      />
    </>
  );
};

export default CardList;
