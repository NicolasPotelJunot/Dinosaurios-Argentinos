import Image from "next/image";
import Link from "next/link.js";

export const ListDinos = ({ dataDino, query }) => {
  // dataDino.sort((a, b) => {
  //   const idDinoA = a.namedino.toLowerCase();
  //   const idDinoB = b.namedino.toLowerCase();
  //   if (idDinoA < idDinoB) {
  //     return -1;
  //   }
  //   if (idDinoA > idDinoB) {
  //     return 1;
  //   }
  //   return 0;
  // });

  return (
    <div className="grid-cols-5 grid gap-5">
      {dataDino
        .filter((dino) => dino.namedino.toLowerCase().includes(query))
        .map((dino) => (
          <article key={`${dino.id}`}>
            <Link href={`/registrodinosaurios/${dino.id}`}>
              <div className="bg-white m-3 text-black h-full">
                <div className="flex justify-center">
                  <Image
                    src={`/assets/img/${dino.id}.jpg`}
                    alt=""
                    width="400"
                    height="400"
                  />
                </div>

                <div>
                  <h5>{dino.namedino}</h5>
                  <p>{dino.tipo}</p>
                  <p>{dino.era}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
    </div>
  );
};
