function Contact() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#0c969c] p-5">
        <div className="w-70 sm:w-100 flex flex-col items-center justify-center bg-[#032f30] p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-white w-full">Contact Page</h1>
          <form action="" className="w-full">
            <label className="text-white font-bold">Name:</label>
            <br />
            <input
              type="text"
              className="w-full ml-2 p-2 rounded-md border border-gray-300"
            />
            <br />
            <br />
            <label className="text-white font-bold">Email:</label>
            <br />
            <input
              type="email"
              className="w-full ml-2 p-2 rounded-md border border-gray-300"
            />
            <br />
            <br />
            <label className="text-white font-bold">Message:</label>
            <textarea
              className="w-full ml-2 p-2 rounded-md border border-gray-300"
              rows="4"
            ></textarea>
            <br />
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
