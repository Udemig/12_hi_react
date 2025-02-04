import { useEffect, useState } from "react";
import Card from "./Card/UserCard";
const Users = () => {
  // State Kurulumu
  const [users, setUsers] = useState([]);
  //
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      {/* Her bir kullanıcı için bir kart render et */}
      <div className="gridContainer">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default Users;
