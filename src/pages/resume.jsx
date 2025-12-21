function Resume() {
  return (
    <section className="w-full bg-[#0c969c] flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-[#032f30] text-white rounded-2xl p-8">  
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Izahan</h1>
          <p className="text-lg text-gray-300 mt-1">
            Frontend Developer (React)
          </p>

          <div className="text-sm text-gray-300 mt-3 space-y-1">
            <p>Email: Izahansodha5316@gmail.com</p>
            <p>GitHub: https://github.com/izahansodha</p>
            <p>Available for Remote Work</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-200 leading-relaxed">
            Frontend Developer with hands-on experience building responsive and
            production-ready web applications using React and Tailwind CSS.
            Skilled in creating admin dashboards, portfolio websites, and
            API-driven user interfaces. Actively seeking remote frontend
            opportunities.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-200">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>Chart.js</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>

          <div className="mb-4">
            <h3 className="font-semibold">Admin Dashboard</h3>
            <p className="text-gray-300 text-sm">
              Built a role-based admin dashboard with CRUD operations, charts,
              protected routes, and API integration.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Tech: React, Tailwind CSS, Chart.js, JSON Server
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Portfolio Website</h3>
            <p className="text-gray-300 text-sm">
              Developed a modern portfolio website with animated UI,
              project showcase, resume page, and responsive design.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Tech: React, Tailwind CSS, Vite
            </p>
          </div>

          <div>
            <h3 className="font-semibold">E-commerce Frontend</h3>
            <p className="text-gray-300 text-sm">
              Created product listing, cart functionality, and filtering
              features for an e-commerce frontend.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Tech: React, Tailwind CSS
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-200">
            Diploma In Computer Engineering
            <br />
            <span className="teSxt-sm text-gray-400">
             Goverment Polytechnic Junagadh
            </span>
          </p>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <a
            href="/Izahansodha.pdf"
            download
            className="inline-block px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Download Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;
