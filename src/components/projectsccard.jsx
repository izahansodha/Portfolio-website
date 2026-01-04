function Projectsccard({ title, description, tech, live, github ,status}) {
  return (
    <div className="text-white p-6 sm:w-[400px] hover:shadow-2xl border bg-white/3 border-white/20 shadow-xl rounded-2xl transition-all hover:scale-105">

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs bg-white/10 px-3 py-1 rounded-full"
          >
            {item}
          </span> 
        ))}
      </div>
      <div className="flex mb-4">
        <span  className="text-xs bg-white/10 px-3 py-1 rounded-full">
        Status : {status}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={live}
          target="_blank"
          className="flex-1 text-center bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Live
        </a>

        <a
          href={github}
          target="_blank"
          className="flex-1 text-center border border-white py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
        >
          Code
        </a>
      </div>

    </div>
  );
}

export default Projectsccard;
