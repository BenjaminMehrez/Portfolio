import useLanguageStore from "@/store/useLanguage";
import { LanguageIcon } from "@heroicons/react/24/solid";

function BannerLanguage() {
  const { language, setLanguage } = useLanguageStore();
  const handleClick = () => {
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-8 bottom-10 border border-purple-600 bg-color rounded-full p-2 z-50 sm:hidden"
    >
      <LanguageIcon className="w-8 h-8 " />
    </button>
  );
}

export default BannerLanguage;
