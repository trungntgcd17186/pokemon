import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
function Pokemon(props) {
  const [data, setData] = useState([]);
  const [type, setType] = useState();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5")
      .then(function (response) {
        setData(response.data.results);
        response.data.results.map((item) =>
          axios.get(item.url).then(function (response) {
            setType(response.data.types[0].type.name);
          })
        );
      });
  }, []);

  let arr2 = [];

  arr2.push({ type });
  console.log(arr2);
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="poke-container">
        {data?.map((pokemon, index) => (
          <div
            key={index}
            className="pokemon"
            style={{ backgroundColor: "rgb(222, 253, 224)" }}
          >
            <div className="img-container">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                  index + 1
                }.svg`}
                alt=""
              />
            </div>

            <div className="info">
              <span className="number">{"#00" + (index + 1)}</span>
              <h3 className="name">{pokemon.name}</h3>

              <small className="type">
                Type: <span>{}</span>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
