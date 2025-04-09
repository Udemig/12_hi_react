import { useOutletContext, useParams } from "react-router-dom";
import Header from "../components/header";
import List from "../components/list";
import Form from "../components/form";

const ChatPage = () => {
  const user = useOutletContext();
  const { room } = useParams();

  return (
    <div className="h-screen md:grid md:place-items-center">
      <div className="bg-white text-grey w-full md:w-[80vw] md:max-w-[600px] h-screen md:h-[80vh] md:rounded-md overflow-hidden flex flex-col">
        <Header user={user} room={room} />

        <List room={room} />

        <Form user={user} room={room} />
      </div>
    </div>
  );
};

export default ChatPage;
