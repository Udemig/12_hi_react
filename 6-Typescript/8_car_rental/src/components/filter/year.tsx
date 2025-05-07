import { FC, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string>(searchParams.get("year") || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // inputa yıl girildiyse url'e aktar yoksa kaldır
    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="year">Yıl</label>

      <div className="flex">
        <input
          id="year"
          value={year}
          name="year"
          type="number"
          placeholder="örn:2025"
          onChange={(e) => setYear(e.target.value)}
          className="w-28 py-[6px] px-2 rounded-l-[4px] shadow text-black bg-white border-r border-zinc-200"
        />

        <button
          name="ara"
          className="bg-white rounded-r text-blue-500 hover:bg-zinc-200 transition cursor-pointer px-3"
        >
          🔎
        </button>
      </div>
    </form>
  );
};

export default Year;
