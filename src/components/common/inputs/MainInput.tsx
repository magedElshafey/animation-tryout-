import { useTranslation } from "react-i18next";
interface MainInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
}
const MainInput: React.FC<MainInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  label,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <label
        htmlFor={placeholder}
        className="text-sm md:text-base block mb-2 font-medium"
      >
        {label}
      </label>
      <input
        className="bg-[#F0EDFFCC] rounded-lg border border-[#ADADAD] outline-none  py-3 px-5 w-full"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder ? t(placeholder) : ""}
        id={placeholder}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};

export default MainInput;
