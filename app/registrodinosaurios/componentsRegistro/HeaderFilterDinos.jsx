export const HeaderFilterDinos = ({
  setDataDino,
  filterDinoTipo,
  filterDinoEra,
  dinosaurios,
}) => {
  return (
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
  );
};
