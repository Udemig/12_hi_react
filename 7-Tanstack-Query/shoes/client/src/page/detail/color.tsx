import { useState, type FC } from "react";
import { colorList } from "../../utils/constants";

interface Props {
  colors: string;
}

const Color: FC<Props> = ({ colors }) => {
  const [selected, setSelected] = useState<string>("");

  const toggle = (id: string) => {
    setSelected(selected === id ? "" : id);
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {colors.split(",").map((id) => {
          // ekrana basılacak rengin kodunu bul
          const color = colorList.find((i) => i.id === id);

          // ekrana basılan eleman seçili mi
          const isSelected = selected === id;

          return (
            <div
              key={id}
              className={isSelected ? "ring-3 ring-my-blue rounded-full" : ""}
            >
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{ background: color?.code }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
