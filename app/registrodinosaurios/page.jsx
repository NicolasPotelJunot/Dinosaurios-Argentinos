"use client";

import { useState } from "react";
import { dinosaurios } from "../../data/dinosaurs";
import { ListDinos } from "./componentsRegistro/ListDinos";

export default function RegisterDinos() {
  const [dataDino, setDataDino] = useState(dinosaurios);
  const [query, setquery] = useState("");

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

  return (
    <main className="">
      <form className=" w-full mt-10 mb-5" type="submit">
        <input
          className="mx-auto text-black bg-gray-100 w-3/4 block shadow shadow-slate-300 rounded-xl p-3 border border-slate-300 focus:outline-none focus:border-blue-400 sm:text-sm transition"
          type="search"
          placeholder="Buscar dinosaurio"
          name="searchDino"
          onChange={handleFormDino}
        />
      </form>

      <div className="flex w-full justify-center my-8">
        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => setDataDino(dinosaurios)}
        >
          All
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoTipo("Carnívoro")}
        >
          Carnívoros
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoTipo("Herbívoro")}
        >
          Herbívoros
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Triásico")}
        >
          Triásico
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Jurásico")}
        >
          Jurásico
        </button>

        <button
          className="bg-blue-400 text-white p-3 rounded-xl mr-2"
          onClick={() => filterDinoEra("Cretácico")}
        >
          Cretácico
        </button>
      </div>

      <ListDinos dataDino={dataDino} query={query} />
    </main>
  );
}
