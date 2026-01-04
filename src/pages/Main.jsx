import hero from "../assets/img.svg";

function Main() {
  return (
    <section id="Home" className="w-full pt-50 flex md:flex-row items-center justify-center gap-10 px-4">
      
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className=" flex flex-col gap-4 text-center md:text-left justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Hi,</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            I Am Izahan
          </h1>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Full Stxack Developer
          </h1>
        </div>
       
        <div className=" p-6 rounded-2xl shadow-lg transition-all hover:scale-105">
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
