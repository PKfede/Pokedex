import React, { useEffect, useState } from "react";
import styles from "../styles/cardStats.module.css";
import typeLibrary from "../assets/typesImg/assetIndex";
import colorLibrary from "../assets/typesImg/colorIndex";

const CardStats = ({ data, found }: any) => {
  if (!found) {
    return <p>not found2</p>;
  }

  const [color, setColor] = useState('')
  const [pokeType, setPokeType] = useState('')

  const assignColor = () => {
    setColor(colorLibrary[data.types[0].type.name as keyof typeof colorLibrary]);
  }

  useEffect(() => {
    assignColor()
  }, [pokeType])
  return (
    <>
      <div className={styles.CardStats} style={{ backgroundColor: color }}>
        <h1>{data.name.toUpperCase()} </h1>
        <div className={styles.Layout}>
          <div className={styles.LeftLayout}>
            <img
              className={styles.PokeImage}
              src={`https://projectpokemon.org/images/normal-sprite/${data.name}.gif`}
            />
            {
              data.types.map((val: any) => {
                if (pokeType !== data.types[0].type.name) {
                  setPokeType(data.types[0].type.name)
                }
                return (
                  <img key={val.id} className={styles.TypeImage} src={Object(typeLibrary)[val.type.name]} alt="" />
                );
              })}
          </div>
          <div className={styles.RightLayout}>
            <p>Weight: {data.weight} </p>
            {data.stats.map((val: any) => {
              return (
                <p key={val.id}>
                  {val.stat.name.toUpperCase()}: {val.base_stat}{" "}
                </p>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default CardStats;
