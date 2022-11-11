export const FormDinos = ({handleFormDino}) => {
  return (
    <form className=" w-full mt-10 mb-5" type="submit">
      <input
        className="mx-auto text-black bg-gray-100 w-3/4 block shadow shadow-slate-300 rounded-xl p-3 border border-slate-300 focus:outline-none focus:border-blue-400 sm:text-sm transition"
        type="search"
        placeholder="Buscar dinosaurio"
        name="searchDino"
        onChange={handleFormDino}
      />
    </form>
  );
};
