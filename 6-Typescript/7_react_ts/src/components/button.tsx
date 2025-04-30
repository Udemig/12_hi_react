import React, { JSX, FC } from "react";

// Bu component'ın aldığı propların tipini tanımladık
interface IProps {
  text: string;
}

class ClassProps {
  text: string = "";
}

type Props = {
  text: string;
};

// 1) Component Tipini Tanımla
// Prop Type   : Tanımladık
// Return Type : Oto Algılama
const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

// 2) Component Tipini Tanımla
// Prop Type   : Tanımladık
// Return Type : Tanımladık
const Button2 = ({ text }: Props): JSX.Element => {
  return <button>{text}</button>;
};

// 3) Component Tipi Tanımla
// React.FC aracılığı ile tek noktadan hem prop hem return tipi tanılmama
// Prop Type   : Tanımladık
// Return Type : Tanımladık
const Button3: FC<Props> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
