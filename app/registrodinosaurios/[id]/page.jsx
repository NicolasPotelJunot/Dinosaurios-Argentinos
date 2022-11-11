"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dinosaurios } from "../../../data/dinosaurs";

export default function DinoScreen({ params }) {
  const { id } = params;

  const [dinoFind, setDinoFind] = useState("");

  const {
    id: iddino,
    namedino,
    tipo,
    era,
    etimologia,
    familia,
    info,
  } = dinoFind;

  useEffect(() => {
    const dino = dinosaurios.find((dino) => dino.id === id);
    setDinoFind(dino);
  }, [id]);

  return (
    <section className="">
      <Link
        href="/registrodinosaurios"
        className="bg-blue-500 hover:bg-blue-700 px-3 py-2 shadow-inner shadow-sky-400 text-white rounded-xl transition fixed top-8 right-16"
      >
        Ir a la lista
      </Link>
      <div className="pb-5 border-b-2 border-slate-200">
        <h1 className="text-5xl text-slate-600">{namedino}</h1>
      </div>

      <Image
        src={`/assets/img/${iddino}.jpg`}
        alt={iddino}
        width="600"
        height="600"
      />

      <article className="border-2 grid gap-3 bg-slate-700 text-white my-5 shadow-lg shadow-gray-500 rounded-2xl p-10">
        <div>
          <p className="inline font-style-bold">Dieta: </p>
          <p className="inline">{tipo}</p>
        </div>

        <div>
          <p className="inline font-style-bold">Familia: </p>
          <p className="inline">{familia}</p>
        </div>

        <div>
          <p className="inline font-style-bold">Era: </p>
          <p className="inline">{era}</p>
        </div>

        <div>
          <p className="inline font-bold">EtimologÍa: </p>
          <p className="inline">{etimologia}</p>
        </div>

        <div>
          <p className="inline font-bold">Informacion: </p>
          <p className="inline">{info}</p>
        </div>
      </article>
    </section>
  );
}
