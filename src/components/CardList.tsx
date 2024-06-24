import React from "react";
import Card from "./Card";
import { Pagination } from "@mui/material";

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
