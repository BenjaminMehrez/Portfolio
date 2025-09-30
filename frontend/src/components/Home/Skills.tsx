import useTranslation from "@/hooks/useTranslation";

function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto mt-16 px-6 xl:px-0"
    >
      <div className="space-y-12 py-10">
        <div className="space-y-4">
          <h3 className="font-bold text-3xl underline">Skills</h3>
          <p className="font-semibold">{t.skills.description}</p>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            Front-End
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/react.svg" alt="nodejs" />
              <p className="font-semibold">React</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/zustand.svg" alt="expressjs" />
              <p className="font-semibold">Zustand</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/reactquery.svg" alt="expressjs" />
              <p className="font-semibold">React Query</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            Back-End
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/nodejs.svg" alt="nodejs" />
              <p className="font-semibold">NodeJS</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/express.svg" alt="expressjs" />
              <p className="font-semibold">ExpressJS</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/django.svg" alt="expressjs" />
              <p className="font-semibold">Django</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            {t.skills.languages}
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/python.svg" alt="python" />
              <p className="font-semibold">Python</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/javascript.svg" alt="python" />
              <p className="font-semibold">JavaScript</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/typescript.svg" alt="python" />
              <p className="font-semibold">TypeScript</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            {t.skills.database}
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/postgresql.svg" alt="mongodb" />
              <p className="font-semibold">Postgresql</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img
                className="w-10"
                src="/sqlite-svgrepo-com.svg"
                alt="mongodb"
              />
              <p className="font-semibold">SQLite</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/mongo.svg" alt="mongodb" />
              <p className="font-semibold">MongoDB</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            {t.skills.versionControl}
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/git.svg" alt="git" />
              <p className="font-semibold">Git</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/github.svg" alt="github" />
              <p className="font-semibold">GitHub</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/linux-svgrepo-com.svg" alt="github" />
              <p className="font-semibold">Linux</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-start">
          <h4 className="underline text-2xl mt-10 mb-7 font-semibold">
            {t.skills.others}
          </h4>
          <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-5">
            <div
              className="flex items-center justify-center w-full sm:w-auto p-6 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-7" src="/docker.svg" alt="mongodb" />
              <p className="font-semibold">Docker</p>
            </div>
            <div
              className="flex items-center justify-center w-full sm:w-auto p-4 m-auto md:m-0 gap-3 rounded shadow-sm shadow-purple-900"
              data-aos="zoom-in"
            >
              <img className="w-10" src="/tailwind.svg" alt="expressjs" />
              <p className="font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
