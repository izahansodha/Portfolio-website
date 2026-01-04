const Skills = () => {
const items = [
  { id: "1", img: "https://cdn.simpleicons.org/html5/E34F26", name: "HTML" },
  { id: "2", img: "https://cdn.simpleicons.org/css", name: "CSS" },
  { id: "3", img: "https://cdn.simpleicons.org/javascript/F7DF1E", name: "JavaScript" },
  { id: "4", img: "https://cdn.simpleicons.org/react/61DAFB", name: "React" },
  { id: "5", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4", name: "Tailwind" },
  { id: "6", img: "https://cdn.simpleicons.org/node.js/339933", name: "Node.js" },
  { id: "7", img: "https://cdn.simpleicons.org/express/FFFFFF", name: "Express.js" },
  { id: "8", img: "https://cdn.simpleicons.org/mongodb/47A248", name: "MongoDB" },
];


  return (
    <div className="relative w-full overflow-hidden bg-gray-900 p-5 mb-52">

      {/* LEFT GRADIENT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24
                      bg-gradient-to-r from-gray-900 to-transparent z-10" />

      {/* RIGHT GRADIENT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24
                      bg-gradient-to-l from-gray-900 to-transparent z-10" />

      {/* SCROLLING CONTAINER */}
      <div className="flex w-max gap-8 animate-infinite-scroll">

        {/* First list */}
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20
                       shadow-xl text-white rounded-2xl p-5 flex flex-col items-center"
          >
            <img src={item.img} alt={item.name} className="w-12 h-12 mb-2" />
            <h1 className="text-sm font-semibold">{item.name}</h1>
          </div>
        ))}

        {/* Duplicate list (required for infinite scroll) */}
        {items.map((item) => (
          <div
            key={`dup-${item.id}`}
            className="bg-white/10 backdrop-blur-lg border border-white/20
                       shadow-xl text-white rounded-2xl p-5 flex flex-col items-center"
          >
            <img src={item.img} alt={item.name} className="w-12 h-12 mb-2" />
            <h1 className="text-sm font-semibold">{item.name}</h1>
          </div>
        ))}

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-lg border border-white/20
                       shadow-xl text-white rounded-2xl p-5 flex flex-col items-center"
          >
            <img src={item.img} alt={item.name} className="w-12 h-12 mb-2" />
            <h1 className="text-sm font-semibold">{item.name}</h1>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;
