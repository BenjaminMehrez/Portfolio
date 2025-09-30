("use client");
import Layout from "../components/Layout";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import { projects, projectsSpanish } from "../data/projects";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useLanguageStore from "@/store/useLanguage";
import useTranslation from "@/hooks/useTranslation";

function ProjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { language } = useLanguageStore();
  const { id } = useParams();
  const { t } = useTranslation();
  const projectList = language === "es" ? projectsSpanish : projects;
  const item = projectList.find((item: any) => item.id == id);
  return (
    <Layout>
      <TracingBeam className="mt-15 px-10 md:px-5">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10 fade-in">
            <div className="flex justify-between items-center">
              <p className={twMerge("text-xl mb-4")}>{item?.title}</p>
              <div className="mb-3 flex space-x-5">
                {item?.status == "Pending" || item?.status == "Pendiente" ? (
                  <span className="text-lg underline text-purple-600">
                    {item?.status}
                  </span>
                ) : item?.status === "Private" ? (
                  <span className="hover:text-purple-600 transition-all duration-300 font-semibold">
                    {language === "es" ? (
                      <>Privado</>
                    ) : (
                        <span className="hidden sm:inline">Private</span>
                    )}
                  </span>

                ) : (
                  <>
                    {item?.code && (
                      <a
                        target="_blank"
                        className="hover:text-purple-600 transition-all duration-300 font-semibold"
                        href={item?.code}
                      >
                        {language === "es" ? (
                          <>Codigo</>
                        ) : (
                          <>
                            <span className="hidden sm:inline">Visit</span> Code
                          </>
                        )}
                      </a>
                    )}
                    <a
                      target="_blank"
                      className="hover:text-purple-600 transition-all duration-300 font-semibold"
                      href={item?.page}
                    >
                      {language === "es" ? (
                        <>Pagina</>
                      ) : (
                        <>
                          <span className="hidden sm:inline">Visit</span> Page
                        </>
                      )}
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="text-md prose prose-sm dark:prose-invert">
              {item?.status == "Pending" || item?.status == "Pendiente" ? (
                <>
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover brightness-50"
                    />
                  )}
                </>
              ) : (
                <>
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                </>
              )}
              {item?.description}
            </div>
            <div className="my-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t.project.key}
              </h2>
              <ul className="space-y-3 list-disc list-inside text-gray-300 text-sm">
                {item?.keyFeatures?.map((feature: string, index: number) => (
                  <li key={index} className="leading-relaxed font-semibold">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-15">
              {item?.skillsFront && item?.skillsFront.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3 items-center">
                  <h4 className="text-xl font-semibold">Frontend:</h4>
                  {item?.skillsFront.map((skill: any) => (
                    <img
                      key={skill}
                      src={skill}
                      alt={skill}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              )}
              {item?.skillsBack && item?.skillsBack?.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3 items-center">
                  <h4 className="text-xl font-semibold">Backend:</h4>
                  {item?.skillsBack.map((skill: any) => (
                    <img
                      key={skill}
                      src={skill}
                      alt={skill}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              )}
              {item?.skillsOthers && item?.skillsOthers?.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3 items-center">
                  <h4 className="text-xl font-semibold">{t.skills.others}:</h4>
                  {item?.skillsOthers.map((skill: any) => (
                    <img
                      key={skill}
                      src={skill}
                      alt={skill}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </TracingBeam>
    </Layout>
  );
}

export default ProjectDetail;
