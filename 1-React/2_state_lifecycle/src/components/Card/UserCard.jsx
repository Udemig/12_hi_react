const UserCard = ({ user }) => {
  return (
    <div className="card ">
      <div className="top border border-bottom border-2">
        <h1 className="text-center">{user.firstName}</h1>
      </div>
      <div className="info p-2 ">
        <p>Yaş: {user.age} </p>
        <p>Cinsiyet:{user.gender} </p>
        <p>Mail Adresi: {user.email} </p>
      </div>
    </div>
  );
};

export default UserCard;
