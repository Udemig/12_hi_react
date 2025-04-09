import { memo } from "react";

const UserAvatar = ({ photo, name, designs }) => {
  return <img src={photo} alt={name} className={`size-[35px] md:size-[45px] rounded-full ${designs}`} />;
};

export default memo(UserAvatar);
