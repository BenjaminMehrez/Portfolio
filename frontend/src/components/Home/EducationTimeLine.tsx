import useTranslation from "@/hooks/useTranslation";

function EducationTimeLine() {
  const { t } = useTranslation();
  return (
    <section
      id="educationtimeline"
      className="max-w-screen-lg mx-auto my-20 px-12 xl:px-0"
    >
      <h3 className="font-bold text-3xl underline">{t.education.title}</h3>
      <ul className="flex flex-col lg:flex-row mt-10 list-disc list-inside lg:list-none lg:text-center lg:text-sm">
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          {t.education.desarrolloWeb}{" "}
          <span className="hidden sm:inline-flex">CoderHouse</span>
          <span className="hidden lg:inline-flex z-40 relative lg:top-7 xl:top-12 -left-12 rounded-full bg-white">
            .
          </span>
        </li>
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          JavaScript <span className="hidden sm:inline-flex">CoderHouse</span>
          <span className="hidden lg:inline-flex z-40 relative lg:top-7 xl:top-12 xl:-left-12 rounded-full bg-white">
            .
          </span>
        </li>
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          React <span className="hidden sm:inline-flex">CoderHouse</span>
          <span className="hidden lg:inline-flex z-40 relative top-7  rounded-full bg-white">
            .
          </span>
        </li>
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          Back-End Programming{" "}
          <span className="hidden sm:inline-flex">CoderHouse</span>
          <span className="hidden lg:inline-flex z-40 relative top-7 -left-12 rounded-full bg-white">
            .
          </span>
        </li>
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          Responsive Web Design{" "}
          <span className="hidden sm:inline-flex">FreeCodeCamp</span>
          <span className="hidden lg:inline-flex z-40 relative lg:top-7 xl:top-12  -left-14 rounded-full bg-white">
            .
          </span>
        </li>
        <li className="duration-400 hover:text-purple-600 font-semibold border-l-2 pl-2 py-4 lg:border-l-0 lg:border-b-2 lg:px-5">
          {t.education.python}{" "}
          <span className="hidden sm:inline-flex">DesafioLatam</span>
          <span className="hidden lg:inline-flex z-40 relative lg:top-7 xl:top-12 -left-12 rounded-full bg-white">
            .
          </span>
        </li>
      </ul>
    </section>
  );
}

export default EducationTimeLine