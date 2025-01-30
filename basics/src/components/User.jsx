const User = (props) => {
  return (
    <div className="card mt-5 d-flex flex-column gap-3 p-3">
      <h1>{props.name}</h1>
      <p>Yaş:{props.age}</p>
      <p>Meslek:{props.job}</p>
      <p>{props.message}</p>
    </div>
  );
};

export default User;
