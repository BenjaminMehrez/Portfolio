import { useId } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useLanguageStore from "../../store/useLanguage";

const options = [
  { label: "Español", value: "es" },
  { label: "English", value: "en" },
];

export default function Language() {
  const id = useId();
  const { language, setLanguage } = useLanguageStore();

  return (
<div className="relative inline-flex rounded-md">
      <RadioGroup
        value={language}
        onValueChange={setLanguage}
        className="relative inline-grid grid-cols-2 items-center text-sm font-semibold"
      >
        {/* Barra deslizante */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] w-1/2 bg-purple-600 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: language === "en" ? "translateX(100%)" : "translateX(0%)",
          }}
        />

        {/* Botones */}
        {options.map((option, index) => (
          <label
            key={option.value}
            htmlFor={`${id}-${index}`}
            className="relative z-10 inline-flex h-full cursor-pointer items-center justify-center px-3 py-1 transition-colors select-none"
            aria-label={option.label}
          >
            {option.label}
            <RadioGroupItem
              id={`${id}-${index}`}
              value={option.value}
              className="sr-only"
            />
          </label>
        ))}
      </RadioGroup>
    </div>
  );
}
