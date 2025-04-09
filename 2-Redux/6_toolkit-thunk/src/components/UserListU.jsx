import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/updatedSlice";

const UserListU = () => {
  const { isLoading, error, users } = useSelector((store) => store.updatedReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
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

export default UserListU;
