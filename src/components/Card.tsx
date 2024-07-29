import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
import axios from "axios";
import typeLibrary from "../assets/typesImg/assetIndex";
import colorLibrary from "../assets/typesImg/colorIndex";

interface Pokemon {

}

const Card = ({ name, id, setSearchInput }: any) => {

  const [color, setColor] = useState("")
  const [types, setTypes] = useState([])


  const fetchOne = async () => {
    try {
      const fetchData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      const apiData = await fetchData
      if (apiData.data.types[1]) {
        setColor(`linear-gradient(90deg, ${colorLibrary[apiData.data.types[0].type.name as keyof typeof colorLibrary]} 42%, ${colorLibrary[apiData.data.types[1].type.name as keyof typeof colorLibrary]} 61%)`)

      } else {
        setColor(colorLibrary[apiData.data.types[0].type.name as keyof typeof colorLibrary])
      }

      setTypes(apiData.data.types)

    } catch (error) {
      console.error(error)
    }
  };



  useEffect(() => {

    fetchOne()
  }, [name]);



  return (
    <div className={styles.Card} style={{ background: color }}>
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
      {
        types.map((val: any, index: number) => {

          return (
            <img key={index} className={styles.TypeImage} src={typeLibrary[val.type.name as keyof typeof typeLibrary]} alt="" />
          );
        })}
    </div>
  );
};

export default Card;
