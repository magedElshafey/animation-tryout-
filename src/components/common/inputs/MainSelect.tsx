import { useRef, useState, useEffect, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropdown } from "react-icons/io";
import Loader from "../loader/spinner/Loader";
interface OptionType {
  id: number;
  name: string;
}
interface MainSelectProps<T extends OptionType> {
  options?: T[];
  onSelect: (option: T) => void;
  disabled?: boolean;
  loading?: boolean;
  placeholder?: string;
  fetchApi?: () => Promise<T[]>;
  value?: number | null;
}

const MainSelect = <T extends OptionType>({
  options = [],
  onSelect,
  disabled = false,
  loading = false,
  placeholder,
  fetchApi,
  value,
}: MainSelectProps<T>) => {
  const { t, i18n } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);
  const [fetchedOptions, setFetchedOptions] = useState<T[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>("");
  const [search, setSearch] = useState<string>("");
  const optionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSelectedOption = useRef<T>();

  const toggleShowOptions = async () => {
    if (disabled) return;

    setShowOptions((prev) => !prev);
    inputRef.current?.focus();
    if (!showOptions && fetchApi && fetchedOptions.length === 0) {
      try {
        const data = await fetchApi();
        setFetchedOptions(data);
      } catch (error) {
        console.error("Failed to fetch options:", error);
      }
    }
  };

  useEffect(() => {
    if (value != null) {
      const option =
        options.find((option) => option.id === value) ||
        displayedOptions?.find((option) => option.id === value);
      if (option) {
        setSelectedOption(option.name);
        lastSelectedOption.current = option;
      }
    }
  }, [value, options]);

  const handleSelectChange = (option: T) => {
    setSelectedOption(option.name);
    onSelect(option);
    setShowOptions(false);
    lastSelectedOption.current = option;
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionRef.current &&
        !optionRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const displayedOptions = fetchApi ? fetchedOptions : options;

  return (
    <div className="w-full">
      {placeholder && (
        <p className="text-sm md:text-base block mb-2">{placeholder}</p>
      )}
      <div
        ref={optionRef}
        className="relative cursor-pointer"
        onClick={toggleShowOptions}
      >
        <div className="w-full py-3 px-5 rounded-lg  flex items-center justify-between bg-[#F0EDFFCC] border border-[#ADADAD]">
          <input
            ref={inputRef}
            type="text"
            value={selectedOption || search}
            placeholder={selectedOption ? "" : placeholder}
            className="bg-transparent w-full outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
            onFocus={() => {
              setSelectedOption(null);
            }}
            onBlur={() => {
              if (selectedOption === null && lastSelectedOption)
                setSelectedOption(lastSelectedOption.current?.name as string);
            }}
          />
          {!disabled && (
            <div className="w-5 h-5 rounded-[50%] flex items-center justify-center bg-white border border-mainColor text-mainColor">
              <IoMdArrowDropdown className="text-textColor" size={20} />
            </div>
          )}
        </div>
        {showOptions && (
          <div
            className={`absolute top-full w-full h-[120px] overflow-y-scroll bg-white border border-slate-400 rounded-lg shadow-lg z-40 ${
              i18n.language === "ar" ? "right-0" : "left-0"
            }`}
          >
            {loading ? (
              <div className="w-full flex justify-center">
                <div className="py-3">
                  <Loader />
                </div>
              </div>
            ) : displayedOptions.length ? (
              displayedOptions
                .filter((option) =>
                  option.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <p
                    key={item.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectChange(item);
                    }}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                  >
                    {t(item?.name)}
                  </p>
                ))
            ) : (
              <p className="text-center">{t("no data")}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSelect;
