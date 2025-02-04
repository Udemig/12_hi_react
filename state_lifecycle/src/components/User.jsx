import { useState, useEffect } from "react";
import UserCard from "./Card/UserCard";
const User = () => {
  // İd state'i
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState([]);

  // Bileşenin ekrana gelme ve güncellenme anını izle
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  console.log(user);
  console.log(userId);

  return (
    <div>
      <h1 className="text-center mb-3">Kullanıcı Getir</h1>
      <div className="d-flex align-items-center justify-content-center gap-4">
        <button
          onClick={() => setUserId(userId - 1)}
          className="btn btn-danger"
          disabled={userId === 1}
        >
          Önceki
        </button>
        <h3>{userId} </h3>
        <button
          onClick={() => setUserId(userId + 1)}
          className="btn btn-success"
        >
          Sonraki
        </button>
      </div>
      <div className="mt-4 ">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default User;
