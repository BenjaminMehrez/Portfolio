import useLanguageStore from "@/store/useLanguage";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { Toaster, toast } from "sonner";

function BannerLanguage() {
  const { language, setLanguage } = useLanguageStore();
  const handleClick = () => {
    if (language === "es") {
      setLanguage("en");
      toast("English");
    } else {
      setLanguage("es");
      toast("Español");
    } 
  };

  return (
    <>
      <Toaster style={{ width: "115px", margin: "0 auto" }} position="top-center" />
      <button
        onClick={handleClick}
        className="fixed right-8 bottom-10 border border-purple-600 bg-color rounded-full p-3 z-50 sm:hidden"
      >
        <LanguageIcon className="w-8 h-8 " />
      </button>
    </>
  );
}

export default BannerLanguage;
