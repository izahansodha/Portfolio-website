import hero from "../assets/img.svg";

function Main() {
  return (
    <section className="h-screen w-full flex md:flex-row items-center justify-center gap-10 px-4 bg-[#0c969c]">
      {/* Text Section */}
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className=" flex flex-col gap-4 text-center md:text-left justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hi,</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            I Am Izahan
          </h1>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Frontend Developer
          </h1>
        </div>

        {/* Image Section */}
        <div className="bg-[#032f30] p-6 rounded-2xl shadow-lg">
          <img
            src={hero}
            alt="Developer illustration"
            className="w-40 sm:w-48 md:w-56 lg:w-64 animate-float"
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
