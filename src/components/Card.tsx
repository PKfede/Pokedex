import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ name, id, setSearchInput }: any) => {

  return (
    <div className={styles.Card}>
      <button
        className={styles.PokeImage}
        onClick={() => {
          setSearchInput(name);
        }}
      >
        <img
          className={styles.PokeImage}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
      </button>
      <div className={styles.PokeName}>{name.toUpperCase()}</div>
    </div>
  );
};

export default Card;
