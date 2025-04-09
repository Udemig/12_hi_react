import { useSelector } from "react-redux";
import Card from "../Card";

const List = () => {
  // useSelector ile reducer'da tutulan değere abone olma
  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div className="mt-5">
      {todoState.todos.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
