import { options } from "@/utils/constants";
import { FC } from "react";

const Features: FC = () => {
  return (
    <section className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {options.map((option, key) => (
        <div
          key={key}
          className={`flex items-center gap-4 p-4 rounded-lg ${option.bgColor}`}
        >
          {option.icon}

          <div>
            <h3 className="font-medium text-gray-800">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
