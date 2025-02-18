import { useEffect } from "react";
import api from "../../utils/api";
import { useState } from "react";

const ChannelInfo = ({ id }) => {
  const [chanelInfo, setChanelInfo] = useState(null);
  useEffect(() => {
    api.get(`/channel/details/?id=${id}`).then((res) => setChanelInfo(res));
  }, []);

  return (
    <div>
      <h1>ChannelInfo</h1>
    </div>
  );
};

export default ChannelInfo;
