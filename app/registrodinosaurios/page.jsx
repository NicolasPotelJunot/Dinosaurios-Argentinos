"use client";

import { useState } from "react";
import { dinosaurios } from "../../data/dinosaurs";
import { FormDinos } from "./componentsRegistro/FormDinos";
import { HeaderFilterDinos } from "./componentsRegistro/HeaderFilterDinos";
import { ListDinos } from "./componentsRegistro/ListDinos";

export default function RegisterDinos() {
  const [dataDino, setDataDino] = useState(dinosaurios);
  const [sort, setSort] = useState(true);
  const [query, setquery] = useState("");

  const filterDinoTipo = (dinoItem) => {
    const result = dinosaurios.filter((dino) => {
      return dino.tipo === dinoItem;
    });
    setDataDino(result);
  };

  const filterDinoEra = (dinoItem) => {
    const result = dinosaurios.filter((dino) => {
      return dino.idEra === dinoItem;
    });
    setDataDino(result);
  };

  const handleFormDino = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setquery(e.target.value);
  };

  if (sort) {
    dataDino.sort((a, b) => {
      const idDinoA = a.namedino.toLowerCase();
      const idDinoB = b.namedino.toLowerCase();
      if (idDinoA < idDinoB) {
        return -1;
      }
      if (idDinoA > idDinoB) {
        return 1;
      }
      return 0;
    });
  }

  if (!sort) {
    dataDino.sort((a, b) => {
      const idDinoA = a.namedino.toLowerCase();
      const idDinoB = b.namedino.toLowerCase();
      if (idDinoA > idDinoB) {
        return -1;
      }
      if (idDinoA < idDinoB) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <main className="">
      <FormDinos handleFormDino={handleFormDino} />

      <HeaderFilterDinos
        dinosaurios={dinosaurios}
        setDataDino={setDataDino}
        filterDinoTipo={filterDinoTipo}
        filterDinoEra={filterDinoEra}
      />

      <button onClick={() => setSort(true)} className="bg-blue-500 mx-3 p-3">
        AZ
      </button>
      <button onClick={() => setSort(false)} className="bg-blue-500 mx-3 p-3">
        ZA
      </button>

      <ListDinos dataDino={dataDino} query={query} />
    </main>
  );
}
