export function Skills({ skills }) {
  return (
    <>
      <div className="flex flex-wrap mt-12 gap-2">
        {skills &&
          skills.map((item, index) => (
            <button
              className="align-middle font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5 bg-cyan-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 rounded-full"
              key={index}
            >
              {item}
            </button>
          ))}
      </div>
    </>
  );
}
