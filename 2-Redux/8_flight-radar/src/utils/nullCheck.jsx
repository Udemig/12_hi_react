import { MdOutlineQuestionMark as Question } from "react-icons/md";

const nullCheck = (value) => {
  return value || <Question />;
};

export default nullCheck;
