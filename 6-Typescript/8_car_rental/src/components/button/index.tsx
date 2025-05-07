import { FC } from "react";

interface IProps {
  text: string;
  name?: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  fn?: () => void;
}

const Button: FC<IProps> = ({ name, text, designs, disabled, type, fn }) => {
  return (
    <button name={name} onClick={fn} disabled={disabled} type={type} className={`custom-btn ${designs}`}>
      {text}
    </button>
  );
};

export default Button;
