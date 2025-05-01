import { FC } from "react";

interface IProps {
  text: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  fn?: () => void;
}

const Button: FC<IProps> = ({ text, designs, disabled, type, fn }) => {
  return (
    <button onClick={fn} disabled={disabled} type={type} className={`custom-btn ${designs}`}>
      {text}
    </button>
  );
};

export default Button;
