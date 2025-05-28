function Certificate() {
  return (
    <section
      id="certificate"
      className="max-w-screen-lg mx-auto mt-30 px-12 xl:px-0"
    >
      <h3 className="font-bold text-3xl underline">Certificates</h3>
      <div className="flex flex-wrap justify-center items-center gap-20 mt-24">
        <div
          className="w-72 sm:h-44 bg-black text-center shadow-sm shadow-purple-900 hover:shadow-purple-900 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            className="sm:relative sm:w-60 h-auto left-6 bottom-14 object-cover rounded-md shadow-md brightness-105 contrast-110"
            src="/webdeveloper.png"
            alt="certificate"
          />
          <div className="sm:relative bottom-10 px-6">
            <h4 className="hidden sm:block font-semibold text-sm">
              Web Development
            </h4>
            <p className="hidden sm:block font-semibold text-gray-400 text-sm">
              CoderHouse
            </p>
          </div>
        </div>
        <div
          className="w-72 sm:h-44 bg-black text-center shadow-sm shadow-purple-900 hover:shadow-purple-900 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            className="sm:relative sm:w-60 h-auto left-6 bottom-14 object-cover rounded-md shadow-md brightness-105 contrast-110"
            src="/javascript.png"
            alt="certificate"
          />
          <div className="sm:relative bottom-10 px-6">
            <h4 className="hidden sm:block font-semibold text-sm">
              JavaScript
            </h4>
            <p className="hidden sm:block font-semibold text-gray-400 text-sm">
              CoderHouse
            </p>
          </div>
        </div>
        <div
          className="w-72 sm:h-44 bg-black text-center shadow-sm shadow-purple-900 hover:shadow-purple-900 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            className="sm:relative sm:w-60 h-auto left-6 bottom-14 object-cover rounded-md shadow-md brightness-105 contrast-110"
            src="/backend.png"
            alt="certificate"
          />
          <div className="sm:relative bottom-10 px-6">
            <h4 className="hidden sm:block font-semibold text-sm">
              Back-End Programming
            </h4>
            <p className="hidden sm:block font-semibold text-gray-400 text-sm">
              CoderHouse
            </p>
          </div>
        </div>
        <div
          className="w-72 sm:h-44 bg-black text-center shadow-sm shadow-purple-900 hover:shadow-purple-900 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            className="sm:relative sm:w-60 h-auto left-6 bottom-14 object-cover rounded-md shadow-md brightness-105 contrast-110"
            src="/freecodeweb.png"
            alt="certificate"
          />
          <div className="sm:relative bottom-10 px-6">
            <h4 className="hidden sm:block font-semibold text-sm">
              Responsive Web Design
            </h4>
            <p className="hidden sm:block font-semibold text-gray-400 text-sm">
              FreeCodeCamp
            </p>
          </div>
        </div>
        <div
          className="w-72 sm:h-44 bg-black text-center shadow-sm shadow-purple-900 hover:shadow-purple-900 hover:shadow-lg transition-all duration-300"
          data-aos="fade-up"
        >
          <img
            className="sm:relative sm:w-60 h-auto left-6 bottom-14 object-cover rounded-md shadow-md brightness-105 contrast-110"
            src="/python.png"
            alt="certificate"
          />
          <div className="sm:relative bottom-12 px-6">
            <h4 className="hidden sm:block font-semibold text-sm">
              Python Interactive
            </h4>
            <p className="hidden sm:block font-semibold text-gray-400 text-sm">
              DesafioLatam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
