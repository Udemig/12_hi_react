import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setUsers } from "../redux/slices/classicSlice";

const UserListC = () => {
  const { isLoading, error, users } = useSelector((store) => store.classicReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());

    axios
      .get("https://dummyjson.com/users")
      .then((res) => dispatch(setUsers(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Yükleniyor....</p>
      ) : error ? (
        <p>Bir Hata Oluştu!</p>
      ) : (
        users.map((user) => (
          <div className="user">
            <img src={user.image} />

            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        ))
      )}
    </div>
  );
};

export default UserListC;
