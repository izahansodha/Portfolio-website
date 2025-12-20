function Projectsccard({ title, description, tech, live, github }) {
  return (
    <div className="bg-[#032f30] text-white rounded-2xl p-6 sm:w-[400px] w-full shadow-lg hover:shadow-2xl transition">
      
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
        Status : Inprogress
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
