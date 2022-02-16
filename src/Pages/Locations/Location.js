import React, { useState, useEffect } from "react";
import styles from "../../components/Cards/Cards.module.css";

const Location = () => {
  let [locations, updateLocations] = useState([]);
  let api = `https://rickandmortyapi.com/api/location`;
  let { info, results } = locations;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateLocations(data);
    })();
  }, []);

  let display;
  console.log(results);
  if (results) {
    display = results.map((xd) => {
      let { id, name, dimension, type } = xd;
      return (
        <div>
          <a
          href="##"
            class="list-group-item list-group-item-action "
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content">
              <h5 class="mb-1 fs-6">Name - {name}</h5>
            </div>
            <h3 class="mb-1 fs-5">Dimension - {dimension}</h3>
            <p class="mb-1 fs-5">type - {type}</p>
          </a>
        </div>
      );
    });
  }

  return <>{display}</>;
};

export default Location;
